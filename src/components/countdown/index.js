import { Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Countdown = ({ date }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef("");

  const startTimer = () => {
    const countdownDate = new Date(`${date}`);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 10) {
        days = `0${days}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      if (distance < 0) {
        // eslint-disable-next-line
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer(); // eslint-disable-next-line
    let currentInterval = interval.current;
    return () => {
      clearInterval(currentInterval);
    };
  });

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 150px)", md: "repeat(4, 120px)" }}
      gap="20px"
      justifyContent="center"
      maxW="100%"
      h={{ base: "100%", md: "130px" }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        w={{ base: "150px", md: "120px" }}
        h="129px"
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign="center"
        bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.04) 105.19%)"
        boxShadow="inset -6px 11px 21px -1px rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(42px)"
        borderRadius="20px"
      >
        <Text
          fontSize={{ base: "36px", md: "50px" }}
          mb="6px"
          color="#fff"
          fontWeight="bold"
          lineHeight="100%"
        >
          {timerDays}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="normal"
          color="#fff"
        >
          Days
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        w={{ base: "150px", md: "120px" }}
        h="129px"
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign="center"
        bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.04) 105.19%)"
        boxShadow="inset -6px 11px 21px -1px rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(42px)"
        borderRadius="20px"
      >
        <Text
          fontSize={{ base: "36px", md: "50px" }}
          mb="6px"
          color="#fff"
          fontWeight="bold"
          lineHeight="100%"
        >
          {timerHours}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="normal"
          color="#fff"
        >
          Hours
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        w={{ base: "150px", md: "120px" }}
        h="129px"
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign="center"
        bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.04) 105.19%)"
        boxShadow="inset -6px 11px 21px -1px rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(42px)"
        borderRadius="20px"
      >
        <Text
          fontSize={{ base: "36px", md: "50px" }}
          mb="6px"
          color="#fff"
          fontWeight="bold"
          lineHeight="100%"
        >
          {timerMinutes}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="normal"
          color="#fff"
        >
          Minutes
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        w={{ base: "150px", md: "120px" }}
        h="129px"
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign="center"
        bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.04) 105.19%)"
        boxShadow="inset -6px 11px 21px -1px rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(42px)"
        borderRadius="20px"
      >
        <Text
          fontSize={{ base: "36px", md: "50px" }}
          mb="6px"
          color="#fff"
          fontWeight="bold"
          lineHeight="100%"
        >
          {timerSeconds}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="normal"
          color="#fff"
        >
          Seconds
        </Text>
      </Flex>
    </Grid>
  );
};

export default Countdown;
