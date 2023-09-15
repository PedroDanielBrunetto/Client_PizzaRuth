import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import logo from "../assets/logo96.png"

export default function Acess(){
    return(
      <div className="container h-full p-10">
        <div className="gap-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-2/6">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                        <a href="/">
                            <img
                                className="mx-auto w-48"
                                src={logo}
                                alt="logo"
                            />
                        </a>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Somos a PizzaRuth
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4 font-bold text-center">Login</p>
                      <div className="flex flex-col">
                        <label className="py-3 font-semibold">Email</label>
                        <input type="email" placeholder="exemplo@provedor.com" className="w-full p-1 hover:border-green-700 border rounded-md"></input>
                        <label className="py-3 font-semibold">Senha</label>
                        <input type="password" placeholder="******************" className="w-full p-1 hover:border-green-700 mb-4 border rounded-md"></input>
                      </div>
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Entrar
                          </button>
                        </TERipple>
                        <a href="#!">Esqueceu a senha?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Não tem conta? Se registre!</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}