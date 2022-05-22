import * as React from "react";
import CardUI from "./Card";
import { Meta } from "@storybook/react";
import { iCardProps } from "./types";
import { Text } from "../Text";
import { Col } from "../Col";
import { ExampleSection } from "../../../story-components";
import CardMedia from "./CardMedia";
import CardContent from "./CardContent";
import CardActions from "./CardActions";
import { Button } from "../Button";
import { CampaignIcon } from "../../../assets";
import { Row } from "../Row";
import { Divider } from "../Divider";

export default {
  title: "Components/Core",
  component: CardUI,
} as Meta<iCardProps>;

export const Card: React.FC<iCardProps> = () => {
  return (
    <Col spacing={16}>
      <Text variant="heading4SemiBold">
        Cards contain content and actions about a single subject.
      </Text>
      <Col spacing={8}>
        <Text variant="bodyRegular">
          Cards are surfaces that display content and actions on a single topic.
        </Text>
        <Text variant="bodyRegular">
          They should be easy to scan for relevant and actionable information.
          Elements, like text and images, should be placed on them in a way that
          clearly indicates hierarchy.
        </Text>
      </Col>

      <ExampleSection title="Order Card">
        <Col hCenter>
          <CardUI elevation={1} sx={{ width: 380 }}>
            <CardContent className="p-0">
              <Col spacing={16}>
                <Col spacing={4} className="p-4 pb-0">
                  <Text variant="bodySemiBold">Order #74HB21G8Z3</Text>
                  <Text variant="bodyRegular">08 Sept 2020 13:00</Text>
                </Col>
                <Divider />
                <Row className="p-4" spacing={8} fullWidth>
                  <img
                    src="/assets/images/indomie.png"
                    style={{
                      width: 80,
                      maxWidth: 80,
                      height: 66,
                      objectFit: "cover",
                    }}
                  />
                  <Col spacing={10} flex={1}>
                    <Row spacing={6} justifyContent="space-between">
                      <Text variant="bodyRegular" color="interface.black.400">
                        Toko Penjual
                      </Text>
                      <Text variant="bodyRegular">GADA-nindoy</Text>
                    </Row>
                    <Row spacing={6} justifyContent="space-between">
                      <Text variant="bodyRegular" color="interface.black.400">
                        Total Bayar
                      </Text>
                      <Text variant="bodyRegular">Rp 8.800.000</Text>
                    </Row>
                    <Row spacing={6} justifyContent="space-between">
                      <Text variant="bodyRegular" color="interface.black.400">
                        Jumlah yang dibeli
                      </Text>
                      <Text variant="bodyRegular">3 Produk</Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </CardContent>
          </CardUI>
        </Col>
      </ExampleSection>

      <ExampleSection
        title="Advanced Card"
        description={{
          text: "Example of a card using an image to reinforce the content.",
        }}
      >
        <Col hCenter>
          <CardUI elevation={1} sx={{ width: 345 }}>
            <CardMedia
              image="/assets/images/indomie.png"
              sx={{ minHeight: 140 }}
            />

            <CardContent className="p-4">
              <Col spacing={8}>
                <Text variant="bodySemiBold" className="text-underline">
                  Indomie
                </Text>
                <Text variant="bodyRegular" className="text-underline">
                  Indomie is a brand of instant noodle produced by the
                  Indonesian company Indofood. Indofood itself is the largest
                  instant noodle producer in the world with 16 factories.
                </Text>
              </Col>
            </CardContent>

            <CardActions className="p-4">
              <Row vCenter spacing={16}>
                <Button
                  startIcon={<CampaignIcon />}
                  variant="text"
                  color="primary"
                >
                  Share
                </Button>
                <Button variant="text" color="primary">
                  Learn More
                </Button>
              </Row>
            </CardActions>
          </CardUI>
        </Col>
      </ExampleSection>
    </Col>
  );
};
