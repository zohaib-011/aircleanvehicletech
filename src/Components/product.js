const Product = () => {
    return (
        <div>
            <h5>Our Product</h5>
            <img src="/images/filter.png" alt="Exhaust Air Filter" />
            <p>Description for Exhaust Air Filter</p>
            <ol>
                <li>
                    <strong>Material Selection:</strong>
                    <ul>
                        <li>Material: Pure copper metal sheet.</li>
                        <li>Initial Plate Dimensions: 3 inches wide, 3.5 inches long, and 1 cm thick.</li>
                    </ul>
                </li>
                <li>
                    <strong>Marking the Centre of the Plate:</strong>
                    <ul>
                        <li>Purpose: The centre of the plate is marked to provide a reference point for subsequent operations.</li>
                        <li>Tool Used: Centre punch.</li>
                        <li>Process:
                            <ul>
                                <li>Place the rectangular copper plate on a flat surface.</li>
                                <li>Measure and mark the centre of the plate (1.5 inches from one edge and 1.75 inches from the other).</li>
                                <li>Use the centre punch to make a small indentation at the centre mark. This helps in positioning the calliper for drawing the circle and also aligns the lathe chuck.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Drawing the Circular Profile:</strong>
                    <ul>
                        <li>Purpose: To outline the round shape that will be machined from the rectangular plate.</li>
                        <li>Tool Used: Vernier calliper.</li>
                        <li>Process:
                            <ul>
                                <li>Open the calliper to 1.5 inches, which represents the radius of the desired circle (since the diameter is 3 inches).</li>
                                <li>Place one leg of the calliper in the centre punch indentation and use the other to scribe a circle with a 3-inch diameter on the surface of the plate.</li>
                                <li>This circle acts as a guide for cutting the copper plate to the required round shape.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Setting Up the Lathe Machine (Four-Jaw Chuck):</strong>
                    <ul>
                        <li>Purpose: To rough cut the plate into a circular shape.</li>
                        <li>Machine: Lathe with a four-jaw chuck.</li>
                        <li>Process:
                            <ul>
                                <li>Secure the plate in a four-jaw chuck. Unlike a three-jaw chuck, the four jaws can be adjusted independently, which is crucial for centring the rectangular plate.</li>
                                <li>Centre the plate carefully using the previously punched centre mark as a guide, adjusting each jaw to ensure the plate is symmetrically held.</li>
                                <li>Once the plate is centred, tighten the jaws to secure the workpiece firmly in place.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Rough Cutting the Circular Shape:</strong>
                    <ul>
                        <li>Purpose: To cut away the excess material and begin forming the plate into a round shape.</li>
                        <li>Tool Used: Single-point cutting tool.</li>
                        <li>Process:
                            <ul>
                                <li>With the plate securely held in the four-jaw chuck, position the single-point cutting tool close to the edge of the plate, near the scribed circle.</li>
                                <li>Begin the cutting process at a slow speed to ensure precision. The tool should cut away the material outside the scribed circle, removing excess copper.</li>
                                <li>Gradually increase the depth of the cut by adjusting the tool’s position incrementally.</li>
                                <li>Continue cutting around the circumference of the scribed circle until the plate starts to take the rough shape of a circle.</li>
                                <li>At this stage, the plate is now in a rough circular form but may need further refinement.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Switching to a Three-Jaw Chuck:</strong>
                    <ul>
                        <li>Purpose: To refine the circular shape and provide better symmetry during the cutting process.</li>
                        <li>Machine: Lathe with a three-jaw chuck.</li>
                        <li>Process:
                            <ul>
                                <li>Once the rough cut is complete, remove the plate from the four-jaw chuck and place it in a three-jaw chuck. A three-jaw chuck automatically centres the workpiece, which is useful for achieving greater symmetry when refining the round shape.</li>
                                <li>Tighten the chuck to secure the plate.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Final Machining and Refining the Shape:</strong>
                    <ul>
                        <li>Purpose: To smooth out the circular shape and refine the edges.</li>
                        <li>Tool Used: Single-point cutting tool.</li>
                        <li>Process:
                            <ul>
                                <li>With the plate securely held in the three-jaw chuck, use the single-point cutting tool to further refine the circular shape.</li>
                                <li>Take light, gradual cuts to remove any irregularities from the rough cut and ensure the edges of the plate are smooth and perfectly round.</li>
                                <li>Adjust the depth of the cut as needed, but avoid taking too deep a cut at once to prevent damaging the plate or the tool.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Filing and Smoothing:</strong>
                    <ul>
                        <li>Purpose: To smooth the surface and edges, giving the plate a finished appearance.</li>
                        <li>Tool Used: File or sandpaper.</li>
                        <li>Process:
                            <ul>
                                <li>After the final machining, use a file or sandpaper to remove any sharp edges or burrs left by the cutting tool.</li>
                                <li>Carefully file the circumference of the plate to achieve a smooth and even finish.</li>
                                <li>You can also file or polish the surface of the plate to enhance its appearance and remove any imperfections or tool marks left from machining.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Final Product:</strong>
                    <ul>
                        <li>The result is a perfectly round copper plate with a 3-inch diameter, a smooth surface, and clean edges, suitable for further processing or use as a final product.</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
}

export default Product;
