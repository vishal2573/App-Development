import React, { useState } from "react";
import { Col, Row } from "antd";
import { Divider } from "antd";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function PetPage1() {
  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1588022274642-f238f77ec193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    img2: "https://images.unsplash.com/photo-1539555348673-7b2cc1ee62be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    img3: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    img4: "https://images.unsplash.com/photo-1579038144560-0cf69470be08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <>
    <NavBar />
    <div className="px-5">
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-evenly">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/4 pr-5">
          <div className="pt-3">
            <span className=" text-blue-600 font-semibold">Dog</span>
            <h1 className="text-3xl font-bold">Bruno</h1>
          </div>
          <p className="text-xl text-gray-700">
            Bruno is a loyal and affectionate canine companion with a heart as
            big as his gentle, brown eyes. He is a medium to large-sized dog,
            with a strong and muscular build, giving him an imposing presence.
            Bruno's coat is typically short and dense. His fur is soft to the
            touch, making him an irresistible cuddle partner.{" "}
          </p>
          <h6 className="text-2xl font-semibold">Rs. 14000.00</h6>
          <div className="flex flex-row items-center gap-12">
            <button className="bg-blue-600 text-white font-semibold py-3 px-16 rounded-xl h-full">
              Adopt!
            </button>
          </div>
          <Divider
            orientation="left"
            style={{ borderColor: "black", fontSize: "1.2rem" }}
          >
            Details
          </Divider>
          <Row>
            <Col span={12}>
              <div className="flex text-lg">
                <div className="font-semibold">Breed :&nbsp;</div>
                <div className="">Golden Retriever</div>
              </div>
            </Col>
            <Col span={12}>
              <div className="flex text-lg">
                <div className="font-semibold">Gender :&nbsp;</div>
                <div className="">Male</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className="flex text-lg">
                <div className="font-semibold">Age :&nbsp;</div>
                <div>2</div>
                <div>&nbsp;Year(s)</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex text-lg">
                <div className="flex text-lg">
                  <div className="font-semibold">Weight :&nbsp;</div>
                  <div>13</div>
                  <div>&nbsp;Kg(s)</div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex text-lg">
                <div className="flex text-lg">
                  <div className="font-semibold">Height :&nbsp;</div>
                  <div>75</div>
                  <div>&nbsp;cm(s)</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="text-lg font-semibold">
                Diet :&nbsp;
                <span className=" font-normal">
                  Bruno's diet should be a mix of high-quality kibble and lean
                  proteins. Feed him twice a day with portion control to keep
                  him fit and avoid overeating. Add some veggies and fruits as
                  occasional treats, but skip the harmful stuff like chocolates
                  or grapes. And don't forget fresh water always!
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="text-lg font-semibold">
                Allergies :&nbsp;
                <span className=" font-normal">Nil</span>
              </div>
            </Col>
          </Row>
          <Row>
          <Divider
            orientation="left"
            style={{ borderColor: "black", fontSize: "1.2rem" }}
          >
            Medical Records
          </Divider>
            <Col span={12}>
              <div className="flex text-lg">
                <div className="font-semibold">Vaccinated :&nbsp;</div>
                <div>Yes</div>
              </div>
            </Col>
            <Col span={12}>
              <div className="flex text-lg">
                <div className="flex text-lg">
                  <div className="font-semibold">
                    Recent Vaccination :&nbsp;
                  </div>
                  <div>13/04/2023</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="text-lg font-semibold pb-5">
                Medical History :&nbsp;
                <span className=" font-normal">
                  Bruno, our lively Golden Retriever, boasts a clean bill of
                  health. Regular vet check-ups reveal strong vital signs, clear
                  eyes, and healthy teeth. Bruno's vaccination records are up to
                  date, protecting him from common doggy illnesses. He's
                  heartworm-free thanks to consistent preventative medication.
                  This happy pup enjoys an active, joyful life.
                </span>
              </div>
            </Col>
          </Row>

        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
