import ImageCard from "./ImageCard";

const Home = () => {
    return (
        <div className="grid grid-flow-row grid-cols-4 grid-rows-3 p-4 gap-4 h-full w-full ">
            <div className="col-span-3 row-span-2 justify-center items-center text-center">
                <ImageCard
                    title="Laptop"
                    price="2000"
                    image="laptop.png"
                    large={true}
                    className=""
                />
            </div>

            <div>
                <ImageCard
                    title="Handbag"
                    price="1000"
                    image="handbag.png"
                    className=""
                />
            </div>
            <div>
                <ImageCard
                    title="Leather Belt"
                    price="300"
                    image="leather-belt.png"
                    className=""
                />
            </div>
            <div>
                <ImageCard
                    title="Shoes"
                    price="200"
                    image="shoes.png"
                    className=""
                />
            </div>
            <div>
                <ImageCard
                    title="Toilet Paper"
                    price="2000"
                    image="toilet-paper.png"
                    className=""
                />
            </div>
            <div>
                <ImageCard
                    title="Watch"
                    price="2000"
                    image="watch.png"
                    className=""
                />
            </div>
            <div>
                <ImageCard
                    title="Phone"
                    price="1200"
                    image="phone.png"
                    className=""
                />
            </div>
        </div>
    );
};

export default Home;
