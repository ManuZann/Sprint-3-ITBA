"use client"
import { Grid, GridItem, Heading, Text, Button } from "@chakra-ui/react";
import { LockIcon } from '@chakra-ui/icons'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Layout from "../Layout";



const images = [
  {
    url: "image/cliente1.webp",
    alt: "Imagen 1",
    width: "600px",
  },
  {
    url: "image/bancopordentro.jpg",
    alt: "bancopordentro",
    width: "600px",
  },
  {
    url: "image/cliente3.webp",
    alt: "Imagen 3",
    width: "600px",
  },
  {
    url: "image/cliente4.webp",
    alt: "Imagen 22",
    width: "600px",
  },
  {
    url: "image/cliente2.webp",
    alt: "Imagen 2",
    width: "600px",
  },
  {
    url: "image/administracion.webp",
    alt: "administracion",
    width: "600px",
  },
];

export default function MyCarousel (){
  return (
    <Layout>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem textAlign='center' mt='5rem'>
              <Heading textAlign='center'>
                  Bienvenido a PILLARBANK
              </Heading>
              <br />
              <Text textAlign='right'>
              En Pillarbank, creemos que tus metas financieras merecen una base sólida. Como tu socio financiero de confianza, estamos comprometidos en brindarte las herramientas y los servicios que necesitas para alcanzar tus objetivos. Nuestra misión es ser el pilar de tu seguridad financiera, y lo demostramos en cada interacción contigo.
              </Text>
              <Link href='/login'><Button leftIcon={<LockIcon/>} mt="24" w="200px" colorScheme="teal">Ingresá</Button></Link>
          </GridItem>
        <GridItem w="45rem" textAlign="center" mt="15px">
          <Carousel autoPlay interval={4000} infiniteLoop>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.alt}
                  width= {image.width}
                  height= "auto"
                />
              </div>
            ))}
          </Carousel>
        </GridItem>
        </Grid>
      </Layout>
  );
};