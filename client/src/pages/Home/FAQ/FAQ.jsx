import * as React from "react";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
//import Typography from "@mui/material/Typography";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useTranslation} from "react-i18next";
const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<AiOutlineArrowRight className="cursor-pointer" size={25} />}
    {...props}
  />
))(({theme}) => ({
  padding: "10px 4px",
  backgroundColor: "#ffc265",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [t, i18n] = useTranslation();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className=" sm:px-10 md:px-10 lg:px-20 flex flex-col items-center gap-10 my-20">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          {t("titlefaq")}
        </h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h3 className="text-sm font-bold">{t("faq.1.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.1.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <h3 className="text-sm font-bold">{t("faq.2.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.2.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 className="text-sm font-bold">{t("faq.3.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.3.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 className="text-sm font-bold">{t("faq.4.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.4.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 className="text-sm font-bold">{t("faq.5.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.5.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <h3 className="text-sm font-bold">{t("faq.6.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.6.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <h3 className="text-sm font-bold">{t("faq.7.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.7.a")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <h3 className="text-sm font-bold">{t("faq.8.q")}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm">{t("faq.8.a")}</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
