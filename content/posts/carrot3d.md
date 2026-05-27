+++
date = '2026-05-27T15:40:00+08:00'
draft = false
title = '3D🥕'
+++
<style>
.carrot-container {
  width: 100%;
  height: 500px; /* 給予它一個固定的展示舞台高度 */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    #7fd8ff 0%,
    #dff7ff 55%,
    #8fdd73 55%,
    #5cb84f 100%
  );
  perspective: 1600px;
  border-radius: 12px; /* 讓它像一個精緻的展示外框 */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin: 20px 0;
}

.cloud-inner {
  position: absolute;
  background: white;
  border-radius: 999px;
  opacity: 0.8;
  animation: cloudMoveInner linear infinite;
}
.cloud-inner::before, .cloud-inner::after {
  content: "";
  position: absolute;
  background: white;
  border-radius: 50%;
}
.cloud-i1 { width: 120px; height: 40px; top: 10%; left: -150px; animation-duration: 20s; }
.cloud-i1::before { width: 50px; height: 50px; top: -20px; left: 15px; }
.cloud-i1::after { width: 60px; height: 60px; top: -25px; right: 15px; }

@keyframes cloudMoveInner {
  from { transform: translateX(0); }
  to { transform: translateX(600px); }
}

.scene-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.float-inner {
  animation: floatInner 3s ease-in-out infinite;
}

.stage3d-inner {
  width: 200px;
  height: 200px;
  perspective: 1200px;
  perspective-origin: 50% 20%;
}

.spin-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-15deg);
  animation: spinInner 6s linear infinite;
}

.carrot-3d-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.cone-side-inner {
  position: absolute;
  top: 20px;
  left: 60px;
  width: 80px;
  height: 160px;
  background: linear-gradient(to bottom, #ff7b23, #ff9f43);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.side-f  { transform: rotateY(0deg) translateZ(12px) rotateX(4deg); background: #ff6b0b; }
.side-b  { transform: rotateY(180deg) translateZ(12px) rotateX(4deg); background: #d95300; }
.side-l  { transform: rotateY(-90deg) translateZ(12px) rotateX(4deg); background: #e65c00; }
.side-r  { transform: rotateY(90deg) translateZ(12px) rotateX(4deg); background: #ffa64d; }

.cone-top-inner {
  position: absolute;
  top: 20px;
  left: 60px;
  width: 80px;
  height: 24px;
  background: #d95300;
  transform: rotateX(90deg) translateZ(12px);
  border-radius: 4px;
}

.leaf-inner {
  position: absolute;
  top: -40px;
  left: 85px;
  width: 30px;
  height: 60px;
  background: linear-gradient(to top, #4b983f, #a2f28d);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform-origin: bottom center;
}
.leaf-i1 { transform: rotateY(0deg) rotateZ(15deg) translateZ(2px); }
.leaf-i2 { transform: rotateY(90deg) rotateZ(-10deg) translateZ(2px); }
.leaf-i3 { transform: rotateY(180deg) rotateZ(20deg) translateZ(-2px); }
.leaf-i4 { transform: rotateY(270deg) rotateZ(-15deg) translateZ(-2px); }

.title-3d {
  margin-top: 20px;
  font-size: 28px;
  color: #d96b1f;
  text-shadow: 0 2px 5px rgba(255,255,255,0.8);
  font-weight: bold;
}

@keyframes floatInner {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes spinInner {
  from { transform: rotateX(-15deg) rotateY(0deg); }
  to { transform: rotateX(-15deg) rotateY(360deg); }
}
</style>

<div class="carrot-container">
  <div class="cloud-inner cloud-i1"></div>
  
  <div class="scene-inner">
    <div class="float-inner">
      <div class="stage3d-inner">
        <div class="spin-inner">
          <div class="carrot-3d-inner">
            <div class="leaf-inner leaf-i1"></div>
            <div class="leaf-inner leaf-i2"></div>
            <div class="leaf-inner leaf-i3"></div>
            <div class="leaf-inner leaf-i4"></div>
            <div class="cone-top-inner"></div>
            <div class="cone-side-inner side-f"></div>
            <div class="cone-side-inner side-b"></div>
            <div class="cone-side-inner side-l"></div>
            <div class="cone-side-inner side-r"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="title-3d">REAL 3D CARROT</div>
  </div>
</div>
