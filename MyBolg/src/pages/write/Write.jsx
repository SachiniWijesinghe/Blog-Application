import "./write.css"

export default function Write() {
    return (
        <div className="write">
            
            <img src="https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg" alt="" className="writeImg"/>
            <form className="writeForm">

                <div className="writeformGroup">

                    <label htmlFor="fileInput">
                        <i class="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />

                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>

                <div className="writeformGroup">
                   <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>

                <button className="writeSubmit"> Publish </button>
            </form>

        </div>
    )
}
