tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "#0d1b2a" 
      }
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 1000
        }
      },
      color: {
        value: "#2e9cef" 
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 0.4,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2.5,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          size_min: 0.4,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      },
      links: {
        enable: true,
        distance: 120,
        color: "#2ec7ef",
        opacity: 0,
        width: 1
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: ["bubble", "grab"]
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 120,
          size: 5,
          duration: 2,
          opacity: 0.8
        },
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.4
          }
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    retina_detect: true
  });