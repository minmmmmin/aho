export default function Animal() {
  const imagePaths = [
    "images/hebi.PNG",
    "images/hituji.PNG",
    "images/inoshishi.PNG",
    "images/inu.PNG",
    "images/kumasan.png", 
    "images/mogumogurisu.png", 
    "images/monkey.PNG",
    "images/mouse.PNG",
    "images/pig.png",
    "images/piyo.PNG",
    "images/tanuki.png",
    "images/tatu.PNG",
    "images/tora.PNG",
    "images/uma.PNG",
    "images/usagi.PNG",
    "images/usi.PNG",
  ];

  return (
    <div>
      {imagePaths.map((path, index) => (
        <img key={index} src={path} alt={`animal-${index}`} className="animal-image"  />
      ))}
    </div>
  );
}
