import styles from "./../../style/info.module.scss";

const GoogleMap = () => {
  return (
    <div className={styles.googleMap} data-aos="fade-left">
      <iframe
        allowTransparency
        scrolling="0"
        frameBorder={0}
        style={{
          height: "300px",
          width: "300px",
        }}
        src="//www.weebly.com/weebly/apps/generateMap.php?map=google&elementid=126534714145774487&ineditor=0&control=3&width=auto&height=300px&overviewmap=0&scalecontrol=0&typecontrol=0&zoom=16&long=7.072060&lat=51.232100 &domain=www&point=1&align=1&reseller=false"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
