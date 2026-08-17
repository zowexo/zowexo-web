"use client";

import { useEffect, useRef } from "react";

export default function GlobalNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let rotation = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const points = [
      { x: -0.45, y: -0.05, name: "EUROPE" },
      { x: -0.08, y: 0.05, name: "MIDDLE EAST" },
      { x: 0.05, y: 0.0, name: "INDIA" },
      { x: 0.30, y: -0.02, name: "ASIA" },
      { x: -0.10, y: 0.40, name: "AFRICA" },
      { x: 0.45, y: 0.42, name: "AUSTRALIA" },
    ];

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.34;

      rotation += 0.0015;

      /* Globe glow */
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.5,
        centerX,
        centerY,
        radius * 1.2
      );

      glow.addColorStop(0, "rgba(255,190,80,0.08)");
      glow.addColorStop(0.7, "rgba(70,150,255,0.06)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      /* Globe */
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

      const globeGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );

      globeGradient.addColorStop(0, "rgba(255,255,255,0.06)");
      globeGradient.addColorStop(0.7, "rgba(20,35,55,0.35)");
      globeGradient.addColorStop(1, "rgba(3,8,18,0.8)");

      ctx.fillStyle = globeGradient;
      ctx.fill();

      /* Globe border */
      ctx.strokeStyle = "rgba(150,200,255,0.55)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* Latitude lines */
      for (let i = -3; i <= 3; i++) {
        const y = centerY + (i / 4) * radius;

        const widthFactor = Math.sqrt(
          Math.max(0, 1 - (i / 4) ** 2)
        );

        ctx.beginPath();

        ctx.ellipse(
          centerX,
          y,
          radius * widthFactor,
          radius * 0.16,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = "rgba(120,170,220,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      /* Longitude lines */
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();

        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(i / 3),
          radius,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = "rgba(120,170,220,0.14)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      /* Connection points */
      const renderedPoints = points.map((point) => {
        const x =
          centerX +
          point.x * radius +
          Math.sin(rotation * 3) * 5;

        const y =
          centerY +
          point.y * radius;

        return {
          x,
          y,
          name: point.name,
        };
      });

      /* Connection lines */
      const india = renderedPoints.find(
        (p) => p.name === "INDIA"
      );

      if (india) {
        renderedPoints.forEach((point) => {
          if (point.name === "INDIA") return;

          ctx.beginPath();

          ctx.moveTo(india.x, india.y);

          const controlX =
            (india.x + point.x) / 2;

          const controlY =
            Math.min(india.y, point.y) - 70;

          ctx.quadraticCurveTo(
            controlX,
            controlY,
            point.x,
            point.y
          );

          ctx.strokeStyle =
            "rgba(255,195,95,0.45)";

          ctx.lineWidth = 1.2;
          ctx.stroke();
        });
      }

      /* Animated dots */
      renderedPoints.forEach((point) => {
        const pulse =
          2 +
          Math.sin(Date.now() / 500 + point.x) * 1.2;

        ctx.beginPath();
        ctx.arc(
          point.x,
          point.y,
          pulse + 4,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(255,190,70,0.08)";

        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          point.x,
          point.y,
          pulse,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(255,215,130,0.95)";

        ctx.shadowColor =
          "rgba(255,190,70,0.9)";

        ctx.shadowBlur = 12;

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="global-network-animation">
      <canvas ref={canvasRef} />
    </div>
  );
}
