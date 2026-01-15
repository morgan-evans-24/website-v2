import ProjectThumbnail from "../ProjectThumbnail.tsx";

function CompilerThumbnail() {
    return (
        <ProjectThumbnail
            header={"Compiler"}
            pathToBackground={"/assets/compiler_imgs/class-1-program.png"}
            altImageText={"Bento"}
            flyIn={"right"}
            navigateTo={"compiler"}
        />
    );
}

export default CompilerThumbnail;
