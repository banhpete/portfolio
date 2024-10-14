import React from "react";
import classNames from "classnames";
import { InView } from "react-intersection-observer";

const VerticalTimelineElement = ({
  children = "",
  className = "",
  contentArrowStyle,
  contentStyle,
  date = "",
  dateClassName = "",
  icon = null,
  iconClassName = "",
  iconOnClick,
  onTimelineElementClick,
  iconStyle,
  id = "",
  position = "",
  style,
  textClassName = "",
  intersectionObserverProps = {
    rootMargin: "0px 0px -40px 0px",
    triggerOnce: true,
  },
  visible = true,
  shadowSize = "small", // small | medium | large
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  contentArrowStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  date?: string;
  dateClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  iconOnClick?: () => void;
  onTimelineElementClick?: () => void;
  iconStyle?: React.CSSProperties;
  id?: string;
  position?: string;
  style?: React.CSSProperties;
  textClassName?: string;
  intersectionObserverProps?: Record<string, string | boolean>;
  visible?: boolean;
  shadowSize?: string;
}>) => (
  <InView {...intersectionObserverProps}>
    {({ inView, ref }) => (
      <div
        ref={ref}
        id={id}
        className={classNames(className, "vertical-timeline-element", {
          "vertical-timeline-element--left": position === "left",
          "vertical-timeline-element--right": position === "right",
          "vertical-timeline-element--no-children": children === "",
        })}
        style={style}
      >
        <React.Fragment>
          <span // eslint-disable-line jsx-a11y/no-static-element-interactions
            style={iconStyle}
            onClick={iconOnClick}
            className={classNames(
              iconClassName,
              "vertical-timeline-element-icon",
              {
                "bounce-in": inView || visible,
                "is-hidden": !(inView || visible),
              }
            )}
          >
            {icon}
          </span>
          <div
            style={contentStyle}
            onClick={onTimelineElementClick}
            className={classNames(
              textClassName,
              "vertical-timeline-element-content",
              {
                "bounce-in": inView || visible,
                "is-hidden": !(inView || visible),
              }
            )}
          >
            <div
              style={contentArrowStyle}
              className="vertical-timeline-element-content-arrow"
            />
            {children}
            <span
              className={classNames(
                dateClassName,
                "vertical-timeline-element-date"
              )}
            >
              {date}
            </span>
          </div>
        </React.Fragment>
      </div>
    )}
  </InView>
);

export default VerticalTimelineElement;
