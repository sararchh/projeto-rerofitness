

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Divider,
  Button,
  Box
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { trainingProps } from "../../../types/trainingProps";

interface Props {
  data: trainingProps,
  handleDeleteTraining: any
}

export default function AccordionStyled({ data, handleDeleteTraining }: Props) {


  return (
    <Accordion sx={{ marginTop: "0.7rem", borderRadius: "12px", "&:hover": { border: "1px solid #FF8D00" } }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#FF8D00", width: "2rem", height: "2rem" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >

        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "100%" }}>
          <Button
            sx={{
              width: "10%",
              height: "70%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              border: "1px solid #FF8D00",

              '@media (max-width: 780px)': {
                width: '40%'
              },

              "&:hover": {
                border: "3px solid #FF8D00",
              },
            }}
          >
            <Typography
              sx={{
                color: "#FF8D00",
                fontWeight: "bold",
                fontSize: "2rem"
              }}>
              {data?.category}
            </Typography>
          </Button  >

          <Button
            sx={{
              color: "#FF8D00"
            }}
            onClick={() => handleDeleteTraining(data.id)}
          ><DeleteOutlineIcon /></Button>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        {data?.trainings.map((item: any, index) => (
          <div key={index}>
            <Typography
              sx={{
                fontWeight: "semibold",
                fontSize: "1.2rem",
                color: "#6f6f6f"
              }}
            >
              <p> {item?.description} </p>
            </Typography>
            <Divider />
          </div>
        ))}

      </AccordionDetails>
    </Accordion>
  );
}
