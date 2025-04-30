import { useEffect, useRef } from "react";

const ScalevForm = () => {
  const iframeRef = useRef(null);
  useEffect(() => {
    const iframe = iframeRef.current;

    function resizeIframe(height) {
      if (iframe) iframe.style.height = height + "px";
    }

    function isUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    }

    function isJSONObject(string) {
      try {
        const parsed = JSON.parse(string);
        return typeof parsed === "object" && parsed !== null;
      } catch (e) {
        return false;
      }
    }

    function isIframeSameOrigin() {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        return true;
      } catch (e) {
        return false;
      }
    }

    function handleMessage(e) {
      if (e.origin === "https://pitcar-service.myscalev.com") {
        if (isUrl(e.data)) {
          window.location.href = e.data;
        }

        if (isJSONObject(e.data) && !isIframeSameOrigin()) {
          const message = JSON.parse(e.data);
          if (message.type === "resize") {
            resizeIframe(message.height);
          }
        }
      }
    }

    window.addEventListener("message", handleMessage);

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          iframe.src = iframe.src; // Reload iframe when in view
          observer.disconnect();
        }
      });
    });

    if (iframe) {
      observer.observe(iframe);
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-4 px-6 pb-8 rounded-2xl border border-gray-200 shadow-xl">
      <iframe
        id="myiframe"
        ref={iframeRef}
        width="100%"
        style={{ border: "none" }}
        src="https://pitcar-service.myscalev.com/franchise-form"
        title="Franchise Form"
      />
    </div>
  );
};

export default ScalevForm;
