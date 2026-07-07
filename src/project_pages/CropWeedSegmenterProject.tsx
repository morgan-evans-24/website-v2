import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function CropWeedSegmenterProject() {
    const navigate = useNavigate();

    return (
        <>
            <title>Crop/Weed Segmentation</title>
            <ScrollToTop />
            <div className="project">
                <div className="project-container">
                    {MyTypewriter("Crop/Weed Segmentation")}
                    <hr className={"divider"} />
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/crop_weed_segmenter_imgs/comparison.png"}
                            alt={
                                "The input and output image for a crop/weed segmenter."
                            }
                        ></img>
                        <div className="tech-list-div">
                            <p className="tech-list-text">Technologies used:</p>
                            <ul className="tech-list-list">
                                <TechnologyTag variant={"MatLab"} />
                            </ul>
                        </div>
                    </div>
                    <hr className={"divider"} />
                    <p>
                        As part of my third year computer vision model, I created a deep learning network able
                        to segment weeds and crops from an image of sugar beet plants in a field. These systems can
                        be used in precision agriculture, allowing robots to remove weeds while leaving crops untouched,
                        reducing the amount of herbicide required.
                        The task for the coursework was to create an accurate segmenter, then write an academic paper
                        detailing the process, which can be read <a href={"/assets/Computer_Vision_Paper.pdf"}>here</a>.
                        The difficult part was that the dataset only contained fifty images, making this a
                        limited dataset problem.
                    </p>
                    <p>
                        I implemented a U-Net encoder-decoder architecture with skip connections. The encoder compressed
                        features down into a latent space while the decoder reconstructed a segmentation mask from
                        this latent space. Heavy data augmentation was used to reduce the impact of the limited dataset
                        available for training.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/crop_weed_segmenter_imgs/crop.png"}
                            alt={
                                "A field with sugar beet crop and weeds in it."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            An example image from the dataset used for the training of the model.
                        </p>
                    </div>
                    <p>
                        A large part of the coursework was the evaluation of the model. After training, the model was
                        run on a set of images not seen during training (the testing set) to measure its performance
                        on unseen data. The model was evaluated using mean accuracy, mean intersection-over-union
                        and mean boundary F1 score.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/crop_weed_segmenter_imgs/confusion-matrix.png"}
                            alt={
                                "A confusion matrix showing the performance of the model."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            This confusion matrix shows the percentages of correct and incorrect predictions. The blue
                            diagonal shows that the model correctly classifies a large majority of the pixels
                        </p>
                    </div>
                    <p>
                        While the model performed well, there were certainly areas it struggled in. First, the
                        model more frequently mistook crop for weeds at the boundaries of crop. Second, the model
                        produced a lot of noise, labelling parts of the ground as weeds. Overall though, I am very
                        happy with the performance of the model.
                    </p>
                    <button
                        className="back-button"
                        onClick={() => {
                            navigate("/projects");
                        }}
                    >
                        Back to all projects
                    </button>
                </div>
            </div>
        </>
    );
}

export default CropWeedSegmenterProject;
