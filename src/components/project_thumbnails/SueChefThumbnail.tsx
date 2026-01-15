import ProjectThumbnail from "../ProjectThumbnail.tsx";

function SueChefThumbnail() {
    return (
        <ProjectThumbnail
            header={"Sue Chef"}
            pathToBackground={"/assets/sue_chef_imgs/sue-intro.png"}
            altImageText={"Bento"}
            flyIn={"left"}
            navigateTo={"suechef"}
        />
    );
}

export default SueChefThumbnail;
