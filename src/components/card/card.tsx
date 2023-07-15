import "./styles.css";

type CardProps = {
    productName: string;
    image: string;
    link: string;
    desc: string;
    key: string;
};

const Card = (props: CardProps) => {
    return (
        <div key={props.key} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.image} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {props.productName}
                </div>
                <p className="text-gray-700 text-base">
                    {props.desc}
                </p>
            </div>
        </div>
    );
};

export default Card;

// <div className="flex flex-wrap -mb-4">
//     <div className="w-1/3 mb-4 bg-gray-400 h-12"></div>
//     <div className="w-1/3 mb-4 bg-gray-500 h-12"></div>
//     <div className="w-1/3 mb-4 bg-gray-400 h-12"></div>
//     <div className="w-1/3 mb-4 bg-gray-500 h-12"></div>
//     <div className="w-1/3 mb-4 bg-gray-400 h-12"></div>
// </div>