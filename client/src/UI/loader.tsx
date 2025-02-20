import { Loader as Loader2 } from "lucide-react";

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <Loader2 className="animate-spin duration-1000 size-12" />
        </div>
    );
}

export default Loader;