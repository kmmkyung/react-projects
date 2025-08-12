import imageData from "../data/imageData";

export default function Home(){
  return (
    <main>
      <section className="w-full h-screen">
        <video className="w-full h-full object-cover object-center" src={imageData.video} loop muted autoPlay/>
      </section>
    </main>
  )
}