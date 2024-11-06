import React, { useState } from "react";

const Ranking = () => {
  const [selectedOption, setSelectedOption] = useState("Especialista");

  const options = [
    { label: "Dedicado", xp: "500 XP" },
    { label: "Economista", xp: "2000 XP" },
    { label: "Esforçado", xp: "3500 XP" },
    { label: "Especialista", xp: "5000 XP" },
  ];

  const users = [
    { name: "Rich", xp: "13,657 XP" },
    { name: "Michael", xp: "12,102 XP" },
    { name: "Roberto", xp: "10,018 XP" },
    { name: "Chris", xp: "9,013 XP" },
    { name: "Chesp", xp: "8,755 XP" },
    { name: "Billie", xp: "8,124 XP" },
    { name: "Naye", xp: "7,802 XP" },
  ];

  const ricos = [
    { name: "Você", vc: "938 VC", position: 12 },
    { name: "Roberto", vc: "8,511 VC" },
    { name: "Chesp", vc: "7,012 VC" },
    { name: "Elon", vc: "6,944 VC" },
    { name: "Michael", vc: "5,500 VC" },
    { name: "Rich", vc: "4,800 VC" },
    { name: "Naye", vc: "4,500 VC" },
    { name: "Luna", vc: "4,000 VC" },
    { name: "Banner", vc: "3,800 VC" },
    { name: "Vilagran", vc: "3,600 VC" },
  ];

  return (
    <div className="bg-gray-800 flex min-h-screen flex-col p-5 text-white">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-extrabold">Os Especialistas!</h2>
          <h3 className="text-gray-400 text-xs font-light">
            Ranking de Vcoins
          </h3>
        </div>
        <div className="relative w-80">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border-purple-500 focus:ring-purple-500 w-full rounded-lg border-2 bg-[#1a001a] p-2 text-[#7c20be] focus:outline-none focus:ring-2"
          >
            {options.map((option) => (
              <option
                key={option.label}
                value={option.label}
                className="bg-[#1a001a] text-white"
              >
                {option.label} {option.xp}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-grow flex-row-reverse items-stretch justify-center gap-6">
        <div className="flex w-1/3 flex-col">
          <div className="h-full rounded-lg bg-[#1f1f1f] p-4">
            <h2 className="text-4xl mb-2 text-left font-extrabold">
              Ricos da Vouvi
            </h2>
            <h3 className="text-gray-400 text-left text-xs font-light">
              Ranking Atualizado
            </h3>

            <div className="rounded p-2">
              {ricos.map((user, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex items-center justify-between rounded-lg p-4 ${
                      user.name === "Você" ? "font-bold" : ""
                    }`}
                    style={{
                      backgroundColor:
                        index >= 1
                          ? "#3D3D3DCC"
                          : user.name === "Você"
                            ? "#002952"
                            : "",
                      border: "1px solid #3d3d3d",
                      marginBottom: "8px",
                    }}
                  >
                    <div className="flex items-center">
                      {user.name === "Roberto" ? (
                        <img
                          src="/images/coroa.png"
                          alt="Coroa"
                          className="mr-2 h-8 w-8"
                        />
                      ) : user.name === "Chesp" ? (
                        <img
                          src="/images/prata.png"
                          alt="Troféu de Prata"
                          className="mr-2 h-8 w-8"
                        />
                      ) : user.name === "Elon" ? (
                        <img
                          src="/images/bronze.png"
                          alt="Troféu de Bronze"
                          className="mr-2 h-8 w-8"
                        />
                      ) : user.name === "Você" ? (
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "#007FFF",
                            marginRight: "10px",
                          }}
                        >
                          <span
                            style={{
                              color: "#002952",
                              fontWeight: "bold",
                            }}
                          >
                            12
                          </span>
                        </div>
                      ) : (
                        <span
                          style={{ marginRight: "10px" }}
                        >{`${index + 1}º`}</span>
                      )}
                      <span
                        className="text-left"
                        style={{
                          marginRight: "10px",
                          color:
                            user.name === "Você"
                              ? "#007FFF"
                              : user.name === "Roberto"
                                ? "#FFD700"
                                : user.name === "Chesp"
                                  ? "#C0C0C0"
                                  : user.name === "Elon"
                                    ? "#CD7F32"
                                    : "",
                        }}
                      >
                        {user.name}
                      </span>
                    </div>
                    <span
                      className="border-gray-400 inline-block border-b text-sm"
                      style={{
                        padding: "0 5px",
                        color:
                          user.name === "Você"
                            ? "#007FFF"
                            : user.name === "Roberto"
                              ? "#FFD700"
                              : user.name === "Chesp"
                                ? "#C0C0C0"
                                : user.name === "Elon"
                                  ? "#CD7F32"
                                  : "",
                      }}
                    >
                      {user.vc}
                    </span>
                  </div>

                  {user.name === "Você" &&
                    ricos[index + 1]?.name === "Roberto" && (
                      <hr
                        className="mx-auto my-2"
                        style={{ width: "50%", borderTop: "2px solid #3d3d3d" }}
                      />
                    )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="h-full rounded-lg bg-[#1f1f1f] p-4">
            <div className="bg-gray-600 mb-4 rounded p-2">
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="flex flex-1 flex-col items-center">
                  <img
                    src="/images/prata.png"
                    alt="Troféu de Prata"
                    className="h-16 w-16"
                  />
                  <p className="text-center">Izzy</p>
                  <p className="border-gray-400 inline-block border-b text-center text-sm">
                    12,020 XP
                  </p>
                </div>

                <div className="flex flex-1 scale-110 transform flex-col items-center">
                  <img
                    src="/images/coroa.png"
                    alt="Coroa"
                    className="h-20 w-20"
                  />
                  <p className="text-center">Você</p>
                  <p
                    className="inline-block border-b text-center text-sm"
                    style={{ color: "#b1b1b1" }}
                  >
                    13,657 XP
                  </p>
                </div>

                <div className="flex flex-1 flex-col items-center">
                  <img
                    src="/images/bronze.png"
                    alt="Troféu de Bronze"
                    className="h-16 w-16"
                  />
                  <p className="text-center">Kim</p>
                  <p
                    className="inline-block border-b text-center text-sm"
                    style={{ color: "#b1b1b1" }}
                  >
                    10,018 XP
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex-grow overflow-y-auto"
              style={{ maxHeight: "500px" }}
            >
              <div className="grid grid-cols-1 gap-4">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg p-4"
                    style={{
                      backgroundColor: "#3D3D3DCC",
                      border: "1px solid #b1b1b1",
                    }}
                  >
                    <div className="flex items-center">
                      <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                        {`${index + 4}º`}
                      </span>
                      <span className="text-left">{user.name}</span>
                    </div>
                    <span
                      className="inline-block border-b text-sm"
                      style={{ color: "#b1b1b1" }}
                    >
                      {user.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center font-bold">
              <span style={{ color: "red" }}>▼ Zona de Rebaixamento ▼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
