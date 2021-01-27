import React, { useState, useCallback, useEffect } from "react";
import { Portal, Backdrop, withStyles } from "@material-ui/core";
import ScrollbarSize from "@material-ui/core/Tabs/";
import classNames from "classnames";

const styles = (theme: any) => ({
  backdrop: {
    zIndex: theme.zIndex.modal,
    backgroundColor: "rgba(0, 0, 0, 0.8)" as const,
  },
  portalImgWrapper: {
    position: "fixed" as const,
    top: "0" as const,
    left: "0" as const,
    width: "100%" as const,
    height: "100%" as const,
    zIndex: theme.zIndex.modal,
    cursor: "pointer" as const,
  },
  portalImgInnerWrapper: {
    display: "flex" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    width: "100%" as const,
    height: "100%" as const,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  portalImg: {
    objectFit: "contain" as const,
    maxWidth: "100%" as const,
    maxHeight: "100%" as const,
  },
  zoomedOutImage: {
    cursor: "pointer" as const,
  },
});

function ZoomImage(props: any) {
  const { alt, src, zoomedImgProps, classes, className, ...rest } = props;
  const [zoomedIn, setZoomedIn] = useState(false);
  const [scrollbarSize, setScrollbarSize] = useState(null);

  const zoomIn = useCallback(() => {
    setZoomedIn(true);
  }, [setZoomedIn]);

  const zoomOut = useCallback(() => {
    setZoomedIn(false);
  }, [setZoomedIn]);

  useEffect(() => {
    if (zoomedIn) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarSize}px`;
      // important figure out later on
      // document.querySelector(
      //   "header"
      // ).style.paddingRight = `${scrollbarSize}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      // important figure out later on
      // document.querySelector("header").style.paddingRight = "0px";
    }
  }, [zoomedIn, scrollbarSize]);

  return (
    <div>
      {/* important figure out later on */}
      {/* <ScrollbarSize onChange={setScrollbarSize}></ScrollbarSize> */}
      {zoomedIn && (
        <Portal>
          <Backdrop
            open={zoomedIn}
            className={classes.backdrop}
            onClick={zoomOut}
          ></Backdrop>
          <div onClick={zoomOut} className={classes.portalImgWrapper}>
            <div className={classes.portalImgInnerWrapper}>
              <img
                alt={alt}
                src={src}
                className={classes.portalImg}
                {...zoomedImgProps}
              ></img>
            </div>
          </div>
        </Portal>
      )}
      <img
        alt={alt}
        src={src}
        onClick={zoomIn}
        className={classNames(className, classes.zoomedOutImage)}
        {...rest}
      ></img>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ZoomImage);
