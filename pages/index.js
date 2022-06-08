import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import fetcher from "../fetcher";
import Footer from "../components/cardTest";
import cardNumeric from "../components/cardNumeric";

export default function Home() {
  const { data, error } = useSWR("/api/user", fetcher);

  console.log(data, error);
  if (data == undefined) {
    return <div className="waitingForConnection">Loading...</div>;
  }
  {/* Alchemica spent (total, tiles, upgrades, installations)  */}
  let formatter = new Intl.NumberFormat(navigator.language || "us-US");
  return (
    <>
      
      <h2>Gotchiverse Economy</h2>
      <Row>
        <Col>
          <div class = "card">
            <div class = "card-body">
              <div class = "card-title">
                Alchemica vs Total Minted
                </div>
              <div class = "card-body">
                <Footer />
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class = "card">
            <div class = "card-body">
              <div class = "card-title">
                  Alchemica vs Total Minted
              </div>
              <div class = "card-body">
                <Footer />
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <Card>GLTR spent (on Upgrades)</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Tiles minted</Card>
        </Col>
        <Col>
          <Card>Installations minted</Card>
        </Col>
        <Col>
          <Card>Upgrades initiated</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>24h number of channels</Card>
        </Col>
        <Col>
          <Card>7d number of channels</Card>
        </Col>
        <Col>
          <Card>30d number of channels</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Active Wallets 24h</Card>
        </Col>
        <Col>
          <Card>Active Wallets 7d</Card>
        </Col>
        <Col>
          <Card>Active Wallets 30d</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Number of players banned vs total players</Card>
        </Col>
        <Col>
          <Card>Amount of Alchemica Sold by banned players</Card>
        </Col>
        <Col>
          <Card>Number of players unbanned</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>GLTR Stakers</Card>
        </Col>
        <Col>
          <Card>LP Tokens staked vs total LP Tokens</Card>
        </Col>
        <Col>
          <Card># Number of extractors</Card>
        </Col>
      </Row>
      <h2>Gotchi Utiliziation</h2>
      <Row>
        <Col>
          <Card>Number of Gotchis summoned</Card>
        </Col>
        <Col>
          <Card>Number of Gotchis sacrificed</Card>
        </Col>
        <Col>
          <Card>Number of Gotchis borrowed (24h, 7d, 30d)</Card>
        </Col>
        <Col>
          <Card>Number of Gotchis channeled (24h, 7d, 30d)</Card>
        </Col>
      </Row>
    </>
  );
}


function Hello() {
  return (
    <div>
      he
      <div class = "">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
