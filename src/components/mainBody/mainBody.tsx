import Button from "../button/Button.tsx";
import"./styles.css"
import Card from "../card/card.tsx";
import product from "../../database/AI.json"

const MainBody = () => {

    return(
        <div className="flex flex-wrap -mb-4">
            {product.map((e) => (
                <div className="w-1/3 mb-4 h-12">
                    <Card productName={e.productName} image={e.image} link={e.link} desc={e.desc} key ={e.key}/>
                    <Button />
                </div>
            ))}
        </div>
    )
}

export default MainBody