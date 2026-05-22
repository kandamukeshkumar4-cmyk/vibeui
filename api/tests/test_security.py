from app.core.preview import build_srcdoc, sanitize_generated_html
from app.middleware.auth import generate_api_key, hash_api_key


def test_sanitize_generated_html_removes_active_content():
    dirty = """
    <div onclick="alert(1)">
      <script>alert("x")</script>
      <link rel="stylesheet" href="https://evil.test/x.css" />
      <img src="javascript:alert(1)" onerror="steal()" />
      <a href="data:text/html,boom">bad</a>
      <iframe src="https://evil.test"></iframe>
      <p style="color: red">Safe text</p>
    </div>
    """

    clean = sanitize_generated_html(dirty)

    assert "<script" not in clean
    assert "<link" not in clean
    assert "<iframe" not in clean
    assert "onclick" not in clean
    assert "onerror" not in clean
    assert "javascript:" not in clean
    assert "data:text/html" not in clean
    assert "Safe text" in clean
    assert "style=" in clean


def test_build_srcdoc_injects_strict_csp_and_static_css_only():
    srcdoc = build_srcdoc("<div class='min-h-screen bg-white'>Preview</div>")

    assert "default-src 'none'" in srcdoc
    assert "script-src 'none'" in srcdoc
    assert "style-src 'unsafe-inline'" in srcdoc
    assert "<script" not in srcdoc
    assert "Preview" in srcdoc


def test_generate_api_key_returns_only_hashable_secret_and_prefix():
    full_key, key_hash, key_prefix = generate_api_key()

    assert full_key.startswith("vui_live_")
    assert key_prefix.startswith("vui_live_")
    assert key_prefix.endswith("...")
    assert hash_api_key(full_key) == key_hash
    assert full_key not in key_hash
