import { useEffect, useContext } from "react";
import { toast } from "react-toastify";

import { trainingProps } from "../../types/trainingProps";

import { MainContext } from "../../contexts/trainingContext";
import AccordionStyled from "../../components/molecules/accordion";
import { deleteTraining } from "../../services/trainingApi";
import DashboardLayout from "../../components/templates/dashboardLayout";

export default function Home() {
  const { handleGetDataTraining, training } = useContext(MainContext);


  useEffect(() => {
    handleGetDataTraining();
  }, []);


  const handleDeleteTraining = async (id: string) => {
    try {
      await deleteTraining(id);
      handleGetDataTraining();
      toast.success("Deletado");
    } catch (error) {
      toast.error("Erro ao deletar");
    }

  }

  return (
    <DashboardLayout>
      <div className=" lg:w-3/4 w-11/12 bg-white shadow-sm h-3/4  rounded-3xl p-6 ">

        {training?.map((item: trainingProps, index: number) => (
          <AccordionStyled key={index} data={item} handleDeleteTraining={handleDeleteTraining} />
        ))}
      </div>
    </DashboardLayout>
  );
}
