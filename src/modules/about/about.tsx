import Image from "next/image";

export const AboutPage = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <h2 className="font-semibold text-2xl">What is this?</h2>
      <div>
        It&#39;s a multichain explorer tool supports your query of the
        transaction with a hash. There&#39;s no need to select a network; just
        send it to us, and we&#39;ll find it.
      </div>
      <h2 className="font-semibold text-2xl">Why this name?</h2>
      <div className="flex justify-center">
        <Image
          src="/the-bowery-king.webp"
          alt="The Bowery King"
          height={320}
          width={300}
          className="object-contain rounded-lg"
        />
      </div>
      Just like The Bowery King has an intelligence network all over the world,
      we have a search network on many chains.
    </div>
  );
};
