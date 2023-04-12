
import { useContext, useEffect, useState } from "react";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import ButtonNavigation from "../../components/molecules/buttonNavigation";
import { MainContext } from "../../contexts/trainingContext";
import { Button } from "@mui/material";
import InputStyled from "../../components/atoms/InputStyled";
import { toast } from "react-toastify";
import { deleteTrainingOne, postTraining } from "../../services/trainingApi";
import DashboardLayout from "../../components/templates/dashboardLayout";


export default function CreateTraining() {

  const [textInput, setTextInput] = useState<string>("");
  const [selectedTraining, setSelectedTraining] = useState<any>([]);

  const { training, typesTraining, handleGetDataTraining, handleGetTypesTraining, setTypesTrainingSelected, typesTrainingSelected } = useContext(MainContext);

  useEffect(() => {
    handleGetDataTraining();
    handleGetTypesTraining();
  }, []);

  useEffect(() => {
    if (training.length > 0) {
      renderOptions();
    }
  }, [typesTrainingSelected]);

  useEffect(() => {
    renderOptions();
  }, [training]);


  const handlePostTraining = async () => {
    try {
      const obj = {
        description: textInput,
        categoriesId: typesTrainingSelected,
      }

      await postTraining(obj);
      handleGetDataTraining();
      toast.success("Cadastrado")
    } catch (error) {
      toast.error("Erro ao cadastra")
    }
  }

  const renderOptions = () => {
    const newArray = training.filter((i) => i.id === typesTrainingSelected);

    setSelectedTraining(newArray);
  }

  const handleRemoveTraining = async (id: string) => {
    try {
      await deleteTrainingOne(id);
      handleGetDataTraining();
      toast.success("Deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar")
    }
  }

  return (
    <DashboardLayout>
      <div className=" lg:w-3/4 w-11/12 bg-white shadow-sm h-3/4  rounded-3xl p-6 ">
        <ul className="flex border-b">
          {Boolean(typesTraining.length) && typesTraining.map((item: any) => (

            <>
              <ButtonNavigation
                typesTrainingSelected={typesTrainingSelected}
                item={item.name}
                index={item._id}
                setTypesTrainingSelected={setTypesTrainingSelected}
              />
            </>
          ))}

        </ul>

        <div >
          <div>
            <InputStyled
              w="lg:w-3/5 sm:w-11/12"
              placeholder="Digite seu Exercicio"
              name="email"
              value={textInput}
              onChangeText={(value: string) => setTextInput(value)}
            />
            <Button sx={{
              color: "#FF8D00"
            }}
              onClick={() => handlePostTraining()}
            >
              <AddCircleOutlineIcon />
            </Button>
          </div>
          {selectedTraining[0]?.trainings.map((item: any, index: number) => (
            <div key={index} className="flex row items-center">
              <div className="lg:w-3/5 sm:w-11/12 h-auto leading-5 relative my-2 py-2 px-4 mt-4 rounded text-gray-800 bg-gray-100">
                <p>{item.description}</p>
              </div>
              <Button
                sx={{
                  color: "#FF8D00"
                }}
                onClick={() => handleRemoveTraining(item._id)}
              ><DeleteOutlineIcon /></Button>
            </div>
          ))}
        </div >
      </div>
    </DashboardLayout>
  )
}

