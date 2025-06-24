import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import BoxB from "@/components/utils/box";
import * as motion from "motion/react-client";


const images = [
  { src: "/assets/adhoc.avif", caption: "Adhoc" },
  { src: "/assets/unhsc.avif", caption: "Unhsc" },
  { src: "/assets/asean.avif", caption: "Asean" },
  { src: "/assets/fcic.avif", caption: "FCIC" },
  { src: "/assets/specpol.png", caption: "Specpol" },
];

const ImageGallery = () => {

  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center">
      <BoxB>
    <div className="flex justify-center items-center">
      <div className="w-[80%] flex flex-wrap items-center justify-center">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative m-4 overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.caption} className="w-64 h-64 object-cover" />
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{opacity: [1,0.5,0], borderRadius:'100%'}}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-md flex items-center justify-center bg-black bg-opacity-60 text-white cursor-pointer"
            >
              <p className="text-4xl">{image.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    </BoxB>
    </div>
    </>
  );
};

export default ImageGallery;
