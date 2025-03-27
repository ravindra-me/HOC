import React, { useEffect, useRef, useState, useTransition } from "react";

function InfinityScroll() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        console.log("Loading more items...");
        setLoading(true);

        startTransition(() => {
          setTimeout(() => {  // Simulating an API delay
            setItems((prev) => [
              ...prev,
              ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1),
            ]);
            setLoading(false);
          }, 1000);
        });
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading]); // Prevent unnecessary triggers

  return (
    <div>
      {items.map((item) => (
        <p key={item}>Item {item}</p>
      ))}

      <div ref={loaderRef} style={{ height: "20px", background: "lightgray" }}></div>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
}

export default InfinityScroll;
