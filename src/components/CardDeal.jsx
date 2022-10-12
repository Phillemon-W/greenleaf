import { image3 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our products are cheap  <br className="sm:block hidden" /> and affordable to everyone.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get a 50g packet of dried Kunde at only Ksh. 100/pkt. The recommended minimum order quantity is 3 packets. Custom orders of below or above 3 is also available as per your request.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={image3} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
