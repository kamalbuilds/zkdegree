// @ts-nocheck
"use client"
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>What Our Users Say</Heading>
          <Text>Discover why our users love ZkDegree.</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>University Director Views</TestimonialHeading>
              <TestimonialText>
              `&quot;`ZkDegree has revolutionized the way we handle academic credentials. It is secure, efficient, and a game-changer for universities.`&quot;`
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "URL_TO_DIRECTOR_IMAGE"
              }
              name={"John Smith"}
              title={"University Director"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>CEO`&apos;` Appreciation</TestimonialHeading>
              <TestimonialText>
              `&quot;`As a CEO, I found ZkDegree incredibly easy and secure to verify academic credentials. It streamlines our hiring process and ensures trust in our candidates.`&quot;`
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "URL_TO_CEO_IMAGE"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Student `&apos;` Testimonial</TestimonialHeading>
              <TestimonialText>
              `&quot;`ZkDegree has made my academic journey more secure and convenient. I can now easily access and share my academic proofs while protecting my privacy.`&quot;`
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "URL_TO_STUDENT_IMAGE"
              }
              name={"Alice Johnson"}
              title={"Student"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
