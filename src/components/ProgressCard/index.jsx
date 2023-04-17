import { Box, Text } from "native-base";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressCard({ label, value }) {
  return (
    <Box w={250} h={200} alignItems="center" m={6}>
      <CircularProgressbar
        value={value}
        maxValue={5}
        text={`${value}`}
        styles={buildStyles({
          rotation: 0.25,
          trailColor: "transparent",
          pathColor: "gray",
          textColor: "black",
        })}
      />
      <Text
        mt={2}
        fontFamily="caption"
        color="black"
        style={{ whiteSpace: "pre-line" }}
      >
        {label}
      </Text>
    </Box>
  );
}
