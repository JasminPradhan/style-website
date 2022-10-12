import "./directory.component.scss"

const Directory = ({ Categories }) => {
    return (
    <div className="main">
        {Categories.map((Category) => (
        <div className="cat" key={Category.id}>
                <div className="img">
                    <img src={Category.imageUrl} />
                </div>
                <div className="title">
                    <h1>{Category.title}</h1>
                </div>
        </div>
        ))}
    </div>
    );
};
export default Directory;
