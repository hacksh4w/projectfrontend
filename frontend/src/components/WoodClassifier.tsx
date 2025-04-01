import { useState, useEffect } from "react";
import { CircleFadingArrowUp, X } from "lucide-react";

// import { FaQuestionCircle } from "react-icons/fa";

interface ProcessingStep {
    text: string;
    completed: boolean;
}

const StampedePrediction = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([]);
    const [showResult, setShowResult] = useState(false);

    // Hardcoded video path
    const VIDEO_PATH = "/home/ubuntu/frappe-bench/apps/alfacrm_adithya/alfacrm_adithya/Wood-Species-Identification-System/frontend/src/assets/video.mp4";

    const processingStepsData = [
        "Loading video file and initializing processing pipeline...",
        "Generated 29 key frames from video",
        "Calculating crowd density using PVT_V2_B5 and crowd count using YOLOv5 + Mask R-CNN...",
        "Predicted Crowd Density from Time-Series Transformer: 0.552",
        "Predicted Crowd Count from Time-Series Transformer: 81",
        "Evaluating potential bottleneck areas...",
        "Generating risk assessment based on transformer values..."
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
            setProcessingSteps([]);
            setShowResult(false);
        }
    };

    const simulateProcessing = async () => {
        setLoading(true);
        setProcessingSteps([]);
        
        for (let i = 0; i < processingStepsData.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay
            setProcessingSteps(prev => [...prev, { text: processingStepsData[i], completed: true }]);
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
        setShowResult(true);
        setLoading(false);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setPreview("");
        setProcessingSteps([]);
        setShowResult(false);
    };

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 py-8">
            <div className="flex gap-6 items-center">
                {/* Main Card - Now vertical */}
                <div className="w-[600px] h-[700px] bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 mt-3">
                    <h2 className="text-xl font-semibold text-gray-100 text-center mb-5">
                        Stampede Prediction System
                    </h2>

                    {/* Video Upload Box */}
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 rounded-lg p-8 cursor-pointer hover:border-red-400 transition">
                        <input type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
                        <CircleFadingArrowUp className="w-16 h-16 text-red-500 mb-2 hover:text-red-400 transition" />
                        <span className="text-gray-300 text-sm text-center">
                            Upload video file or <span className="text-red-400">Choose file</span>
                        </span>
                        <p className="text-xs text-gray-400 mt-1">Supported: MP4, AVI (Max: 100MB)</p>
                    </label>

                    {/* Selected File Info */}
                    {selectedFile && (
                        <div className="mt-4 flex items-center gap-4 bg-gray-700 p-3 rounded-lg">
                            <div className="flex-1">
                                <p className="font-medium text-gray-200 text-sm">{selectedFile.name}</p>
                                <p className="text-xs text-gray-400">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                            </div>
                            <button onClick={handleRemoveFile} className="text-gray-400 hover:text-red-400 transition">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {/* Processing Steps - Adjusted for vertical layout */}
                    {processingSteps.length > 0 && (
                        <div className="mt-4 space-y-2 max-h-[300px] overflow-y-auto">
                            {processingSteps.map((step, index) => (
                                <div 
                                    key={index}
                                    className="p-2 bg-gray-700 rounded-lg border border-gray-600"
                                >
                                    <p className="text-sm text-gray-200">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Cancel Button - Inside card */}
                    {selectedFile && !loading && !showResult && (
                        <div className="mt-4 flex justify-center">
                            <button
                                className="px-6 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500 transition w-full mb-4"
                                onClick={handleRemoveFile}
                            >
                                Cancel
                            </button>
                        </div>
                    )}

                    {/* Analysis Button - Outside card to the right */}
                    {selectedFile && !loading && !showResult && (
                        <div className="flex flex-col justify-center">
                            <button
                                className="px-6 py-12 bg-red-700 text-gray-200 rounded-lg hover:bg-red-600 transition writing-vertical"
                                onClick={simulateProcessing}
                            >
                                <span className="transform inline-block whitespace-nowrap">
                                    Start Analysis
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Result Modal */}
            {showResult && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
                        <button 
                            onClick={() => setShowResult(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {/* <h3 className="text-2xl font-semibold text-red-400 mb-4">Analysis Result</h3>
                        <div className="bg-red-900/30 rounded-lg border border-red-800 p-6">
                            <p className="text-red-300 text-lg mb-4">
                                High risk of stampede detected!
                            </p>
                            <p className="text-gray-200 font-medium mb-2">Recommended actions:</p>
                            <ul className="list-disc ml-4 space-y-2 text-gray-300">
                                <li>Implement crowd control measures</li>
                                <li>Open additional exit routes</li>
                                <li>Deploy security personnel to high-density areas</li>
                            </ul>
                        </div> */}
                        <h3 className="text-2xl font-semibold text-red-400 mb-4">Analysis Result</h3>
                        <div className="bg-yellow-900/30 rounded-lg border border-yellow-800 p-6">
                            <p className="text-yellow-300 text-lg mb-4">
                                Low risk of stampede detected!
                            </p>
                            <p className="text-gray-200 font-medium mb-2">Recommended actions:</p>
                            <ul className="list-disc ml-4 space-y-2 text-gray-300">
                                <li>Implement crowd control measures</li>
                                <li>Open additional exit routes</li>
                                <li>Deploy security personnel to high-density areas</li>
                            </ul>
                        </div>
                        <button
                            onClick={() => setShowResult(false)}
                            className="mt-6 w-full px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StampedePrediction;
