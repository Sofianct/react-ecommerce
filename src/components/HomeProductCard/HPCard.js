import { Grid, Row, Card, Text } from "@nextui-org/react";
import React from "react";

const HPCard = ({ title, price, img }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      <Grid xs={6} sm={3}>
        <Card isPressable>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={img}
              objectFit="cover"
              width="100%"
              height={140}
              alt={title}
            />
          </Card.Body>
          <Card.Footer css={{ justifyItems: "flex-start" }}>
            <Row wrap="wrap" justify="space-between" align="center">
              <Text b>{title}</Text>
              <Text
                css={{
                  color: "$accents7",
                  fontWeight: "$semibold",
                  fontSize: "$sm",
                }}
              >
                {price}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default HPCard;
