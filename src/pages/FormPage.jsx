import { useSearchParams } from "react-router-dom";
import ScalevForm from "../components/ScalevForm";

function FormPage() {
    const [searchParams] = useSearchParams();
  return (
    <div className="p-8 bg-gray-100 max-w-[600px] mx-auto">
      <ScalevForm />
    </div>
  );
}

export default FormPage;
