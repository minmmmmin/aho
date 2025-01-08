export default function Animal() {
  const imagePaths = [
    { src: "images/mouse.PNG", caption: "ねずみ" },
    { src: "images/usi.PNG", caption: "うし" },
    { src: "images/tora.PNG", caption: "とらくん" },
    { src: "images/usagi.PNG", caption: "うきうきらびっと" },
    { src: "images/tatu.PNG", caption: "たつ" },
    { src: "images/hebi.PNG", caption: "へび" },
    { src: "images/uma.PNG", caption: "うま" },
    { src: "images/hituji.PNG", caption: "ひつじ" },
    { src: "images/monkey.PNG", caption: "うきうきもんきー" },
    { src: "images/piyo.PNG", caption: "piyo" },
    { src: "images/inu.PNG", caption: "いぬ" },
    { src: "images/inoshishi.PNG", caption: "いのしし" },
    { src: "images/mogumogurisu.png", caption: "もぐもぐりす" },
    { src: "images/kumasan.png", caption: "くまさん" },
    { src: "images/pig.png", caption: "ぶた" },
    { src: "images/tanuki.png", caption: "たぬき" },
  ];

  return (
    <div className="animal-gallery">
      {imagePaths.map((item, index) => (
        <div key={index} className="animal-item">
          <img src={item.src} alt={item.caption} className="animal-image" />
          <p className="animal-caption">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
