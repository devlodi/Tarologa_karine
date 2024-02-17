particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Aumenta o número de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // Partículas brancas
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.6, // Aumenta a opacidade para um efeito mais brilhante
            random: true, // Opacidade aleatória para um efeito "brilhante"
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4, // Tamanho das partículas
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false // Desabilita as linhas entre as partículas para um efeito "estrelado"
        },
        move: {
            enable: true,
            speed: 2, // Velocidade de movimento das partículas
            direction: "none",
            random: true, // Movimento aleatório para mais dinamismo
            straight: false,
            out_mode: "out", // Partículas se movem para fora, desaparecendo nas bordas
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble" // Efeito de "bolha" ao passar o mouse
            },
            onclick: {
                enable: true,
                mode: "repulse" // As partículas se afastam ao clicar
            }
        },
        modes: {
            bubble: {
                distance: 250,
                size: 8,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            }
        }
    },
    retina_detect: true
});
