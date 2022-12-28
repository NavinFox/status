import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DemoCarousel from "./slider";

export default function CarouselModel(props) {
  return (
    <div>
      <Dialog
        open={props?.open}
        onClose={props?.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DemoCarousel images={props?.selected} />
      </Dialog>
    </div>
  );
}
