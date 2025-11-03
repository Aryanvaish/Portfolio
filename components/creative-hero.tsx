"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cvs = canvas!;
    const context = ctx!;

    let devicePixelRatio: number;
    let gridSize: number;

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const rect = cvs.getBoundingClientRect();

      cvs.width = rect.width * devicePixelRatio;
      cvs.height = rect.height * devicePixelRatio;

      context.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      const rect = cvs.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      distance: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 4 + 1.5;
        this.density = Math.random() * 30 + 1;
        this.distance = 0;

        const hue = Math.random() * 60 + 270;
        this.color = `hsl(${hue}, 70%, 60%)`;
      }

      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        const forceDirectionX = dx / this.distance;
        const forceDirectionY = dy / this.distance;

        const maxDistance = 100;
        const force = (maxDistance - this.distance) / maxDistance;

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
    }

    const particlesArray: Particle[] = [];

    function init() {
      particlesArray.length = 0;

      const width = window.innerWidth;
      if (width < 500) gridSize = 35;
      else if (width < 900) gridSize = 28;
      else gridSize = 25;

      const canvasWidth = cvs.width / devicePixelRatio;
      const canvasHeight = cvs.height / devicePixelRatio;

      const numX = Math.floor(canvasWidth / gridSize);
      const numY = Math.floor(canvasHeight / gridSize);

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2;
          const posY = y * gridSize + gridSize / 2;
          particlesArray.push(new Particle(posX, posY));
        }
      }
    }

    init();

    const animate = () => {
      context.clearRect(0, 0, cvs.width, cvs.height);

      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 30) {
            context.beginPath();
            context.strokeStyle = `rgba(180, 120, 255, ${0.15 - distance / 150})`;
            context.lineWidth = 0.4;
            context.moveTo(particlesArray[i].x, particlesArray[i].y);
            context.lineTo(particlesArray[j].x, particlesArray[j].y);
            context.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </motion.div>
  );
}
