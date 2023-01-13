const scene = theaterJS({ minSpeed: 60 });
const body = document.querySelector("body");
const bg = document.querySelector(".m-background");
const images = Array.from(document.querySelectorAll(".m-background__inner"));

function slider() {
  const offsets = [];

  function setStage() {
    for (let i = 0; i < images.length; i++) {
      const offset = i * 100;
      offsets.push(offset);
      images[i].style.transform = `translateX(${offset}vw)`;
    }
  }

  function goTo(num) {
    console.log(num);
    for (let i = 0; i < offsets.length; i++) {
      const offset = offsets[i] - num * 100;
      images[i].style.transform = `translateX(${offset}vw)`;
    }
  }

  setStage();

  return { goTo };
}

slider();

scene
  .on("type:start, erase:start", () => {
    // add a class to actor's dom element when he starts typing/erasing
    const actor = scene.getCurrentActor();
    actor.$element.classList.add("is-typing");
  })
  .on("type:end, erase:end", () => {
    // and then remove it when he's done
    const actor = scene.getCurrentActor();
    actor.$element.classList.remove("is-typing");
  });

scene.addActor("verkiya", { accuracy: 0.8, speed: 0.8 });

scene
  .addScene("verkiya:Samosa is love<span>🥰 </span> ")
  .addScene("verkiya:❤️ I love to eat them <span>🥘</span>")
  .addScene((done) => {
    bg.classList.add("is-active");
    document.querySelector("span").style.color = "#fff";
    setTimeout(() => {
      document.querySelector("span").style.color = "#000";
      bg.classList.add("is-shrunken");
    }, 900);
    setTimeout(() => {
      done();
    }, 1300);
  })
  .addScene("<br/>Sometimes I cook them at home 😍")
  .addScene("<br/>Or, order them when it's cold outside ⛰️")
  .addScene("<br/>Then back to coding again 👨‍💻")
  .addScene((done) => {
    setTimeout(() => {
      bg.classList.remove("is-shrunken");
      slider().goTo(1);
      document.querySelector(".lisbon").style.color = "#fff";
    }, 300);

    setTimeout(() => {
      bg.classList.add("is-shrunken");
      done();
    }, 1200);
  })
  .addScene("verkiya: 🤗 What do you love to eat?")
  .addScene((done) => {
    // goTo(0);
    done();
  });
