<template>
    <div id="app" class="text-white">
        <q-layout view="hHh LpR fFf" class="dnft-layout">

            <q-header class="dnft-head">
                <q-toolbar class="dnft-hh">
                    <q-toolbar-title v-show="!$q.screen.lt.sm">
                        <q-avatar>
                            <img src="/img/dnftLogo.svg">
                        </q-avatar>
                        DNFT.world
                    </q-toolbar-title>
                    <q-btn flat label="Resource">
                        <q-menu fit transition-show="jump-down" transition-hide="jump-up" content-class="bg-primary text-white">
                            <q-list seperater style="min-width: 100px">
                                <q-item tag="a" clickable href="https://github.com/DNFT-Team/DNFT-white-paper" target="_blank">
                                    <q-item-section>Whitepaper</q-item-section>
                                </q-item>
                                <q-item tag="a" clickable href="https://github.com/DNFT-Team" target="_blank">
                                    <q-item-section>Documentation</q-item-section>
                                </q-item>
                                <q-item tag="a" clickable href="https://github.com/DNFT-Team" target="_blank">
                                    <q-item-section>Developer Tools</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                    <q-btn flat label="Products">
                        <q-menu fit transition-show="jump-down" transition-hide="jump-up" content-class="bg-primary text-white">
                            <q-list seperater style="min-width: 100px">
                                <q-item tag="a" clickable href="https://dnft.world/index.html#what-is-dnft">
                                    <q-item-section>What is DNFT</q-item-section>
                                </q-item>
                                <q-item tag="a" clickable href="https://dnft.world/index.html#Applications">
                                    <q-item-section>Applications</q-item-section>
                                </q-item>
                                <q-item tag="a" clickable href="https://dnft.world/index.html#roadmap">
                                    <q-item-section>Roadmap</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                    <q-btn flat label="Foundation">
                        <q-menu fit transition-show="jump-down" transition-hide="jump-up" content-class="bg-primary text-white">
                            <q-list seperater style="min-width: 100px">
                                <q-item tag="a" clickable href="https://dnft.world/index.html#partners">
                                    <q-item-section>Partners</q-item-section>
                                </q-item>
                                <q-item tag="a" clickable href="https://dnft.world/index.html#join-us">
                                    <q-item-section>Join us</q-item-section>
                                </q-item>
                                <q-item tag="a" clickable href="https://dnft.world/index.html#grant">
                                    <q-item-section>Grant</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </q-toolbar>
            </q-header>

            <q-page-container>
                <main class="dnft-main">
                    <section class="dnft-p1">
                        <p class="intro">
                            A decentralized NFT and Game center powering cross
                            </br>
                            blockchain applications for Polkadot & substrate
                            </br>
                            Ecosystem
                        </p>
                        <p class="short">Safety, openness and technology</p>
                    </section>
                    <section class="dnft-p2">
                        <p class="intro">1 dUSD(DNFT Dollar on MainNet) = 1 US Dollar</p>
                        <p class="short">Your New Start for Crypto NFT&Game World</p>
                    </section>
                    <section class="dnft-p3 dnft-p-short">
                        <a id="what-is-dnft"></a>
                        <p class="intro">What is DNFT?</p>
                        <p class="short">Dnft is a cross chain decentralized NFT asset network based on substance, which is committed to building a new generation of NFT protocol.</p>
                        <div class="row q-col-gutter-md q-py-xl">
                            <div class="col-12 col-md-6">
                                <div class="dnft-card">
                                    <img src="img/p3-1.png">
                                    <div class="dntf-card-txt">
                                        <span class="intro">DOT for DNFT</span>
                                        <q-separator class="card-sep"></q-separator>
                                        <span class="short">Stake DOTs for dUSD.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="dnft-card">
                                    <img src="img/p3-2.png">
                                    <div class="dntf-card-txt">
                                        <span class="intro">DAO for DNFT</span>
                                        <q-separator class="card-sep"></q-separator>
                                        <span class="short">DNF holders will become part of DNFT DAO</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="dnft-card">
                                    <img src="/img/p3-3.png">
                                    <div class="dntf-card-txt">
                                        <span class="intro">Defi for DNFT</span>
                                        <q-separator class="card-sep"></q-separator>
                                        <span class="short">Let Defi accelerate the ecosystem of NFT and Game</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="dnft-card">
                                    <img src="/img/p3-4.png">
                                    <div class="dntf-card-txt">
                                        <span class="intro">Decentralise for DNFT</span>
                                        <q-separator class="card-sep"></q-separator>
                                        <span class="short">A new decentralise platform for NFT and Game.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="dnft-p4 dnft-p-short q-py-xl">
                        <a id="Applications"></a>
                        <p class="dnft-h2" title="Applications"></p>
                        <div class="row wrap q-mt-xl">
                            <div class="col-12 col-md-6">
                                <q-list class="text-left q-gutter-y-md">
                                    <q-item>
                                        <q-item-section avatar>
                                            <img src="/img/p4-1.png" alt="p4">
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="dnft-p6-info">Borrow</q-item-label>
                                            <q-item-label class="dnft-p6-short">Borrow dUSD with your spare token assets</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-item>
                                        <q-item-section avatar>
                                            <img src="/img/p4-2.png" alt="p4">
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="dnft-p6-info">Build</q-item-label>
                                            <q-item-label class="dnft-p6-short">Build your first NFT with DNFT Protocol</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-item>
                                        <q-item-section avatar>
                                            <img src="/img/p4-3.png" alt="p4">
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="dnft-p6-info">Trade</q-item-label>
                                            <q-item-label class="dnft-p6-short">Trade your token & NFT assets on decentralized exchange</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-item>
                                        <q-item-section avatar>
                                            <img src="/img/p4-4.png" alt="p4">
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="dnft-p6-info">Game</q-item-label>
                                            <q-item-label class="dnft-p6-short">enjoy your game time with DNFT Protocol</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </div>
                            <div class="col-12 col-md-6 q-pa-md">
                                <img class="full-width" src="/img/p4-bg.png">
                            </div>
                        </div>
                    </section>
                    <section class="dnft-p5 dnft-p-short q-py-xl">
                        <a id="roadmap"></a>
                        <p class="dnft-h2" title="Roadmap"></p>
                        <div class="q-py-lg">
                            <q-timeline layout="loose" color="secondary">
                                <q-timeline-entry subtitle="2021" side="left">
                                    <div class="dnft-card">
                                        <div class="dntf-card-txt">
                                            <p class="intro">2021</p>
                                            <q-separator class="card-sep"></q-separator>
                                            <ul class="short">
                                                <li>Implement EVM and smart contract</li>
                                                <li>Launch DNFT at kusA</li>
                                                <li>Implement EVM and smart contract</li>
                                            </ul>
                                        </div>
                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry subtitle="2020" side="right">
                                    <div class="dnft-card">
                                        <div class="dntf-card-txt">
                                            <p class="intro">2020</p>
                                            <q-separator class="card-sep"></q-separator>
                                            <ul class="short">
                                                <li>Startup code complete</li>
                                                <li>Launched on the Polkadot test network Rococo</li>
                                                <li>Safety audit / economic audit</li>
                                            </ul>
                                        </div>
                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry subtitle="2019" side="left">
                                    <div class="dnft-card">
                                        <div class="dntf-card-txt">
                                            <p class="intro">2019</p>
                                            <q-separator class="card-sep"></q-separator>
                                            <ul class="short">
                                                <li>DNFT Incorporated</li>
                                                <li>Development Kick-off</li>
                                            </ul>
                                        </div>
                                    </div>
                                </q-timeline-entry>
                            </q-timeline>
                        </div>
                    </section>
                    <section class="dnft-p6 dnft-p-short q-py-xl">
                        <a id="partners"></a>
                        <p class="dnft-h2" title="Cooperative partner"></p>
                        <div class="row q-col-gutter-md q-py-xl">
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c1.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c2.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c3.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c4.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c5.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c6.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c7.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c8.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c9.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c10.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c11.png" alt="coop">
                            </div>
                            <div class="col-6 col-md-3">
                                <img class="full-width" src="/img/coop/c12.png" alt="coop">
                            </div>
                        </div>
                    </section>
                    <section class="dnft-p7 dnft-p-short q-py-xl">
                        <a id="join-us"></a>
                        <p class="dnft-h2" title="Join us"></p>
                        <div class="row q-col-gutter-md q-py-xl">
                            <div class="col-12 col-md-4">
                                <div class="dnft-card">
                                    <div class="dntf-card-txt">
                                        <p class="intro">Dmember</p>
                                        <q-separator class="card-sep"></q-separator>
                                        <p class="short">To become a member of dnft team, to govern together and to develop an open, transparent and stable financial platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="dnft-card">
                                    <div class="dntf-card-txt">
                                        <span class="intro">partner</span>
                                        <q-separator class="card-sep"></q-separator>
                                        <span class="short">Work and build with dnft team members to integrate ACALA stable coin into your products and services.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="dnft-card">
                                    <div class="dntf-card-txt">
                                        <span class="intro">investor</span>
                                        <q-separator class="card-sep"></q-separator>
                                        <span class="short">Talk to us about investing in the dnft team's venture portfolio.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="dnft-p8 dnft-p-short q-py-xl">
                        <a id="grant"></a>
                        <p class="dnft-h2" title="NFT & Game Grant"></p>
                        <p class="field">
                            DNFT protocol encourages NFT and game projects to join the DNFT protocol ecosystem, which will open when the main network is officially launched。
                            We will provide:
                            - A grants bouns pool of 10,000,000 DNF will be provided for the ecosystem dapps & parters.
                            - Technical training and support
                            - Discussion on frontier industry knowledge
                        </p>
                        <div class="img-wrapper">
                            <img src="/img/bg-p8.svg">
                        </div>
                    </section>
                </main>
                <!-- place QPageScroller at end of page -->
                <q-page-scroller
                        class="back-to-top"
                        position="bottom-right"
                        :scroll-offset="150"
                        :offset="[18, 18]"
                >
                    <q-btn fab icon="bt-top02" color="secondary"></q-btn>
                </q-page-scroller>
            </q-page-container>

            <q-footer reveal class="dnft-foot bg-transparent q-pt-sm">
                <q-toolbar class="dntf-ff">
                    <q-avatar>
                        <img src="/img/dnftLogo.svg">
                    </q-avatar>
                    <q-space></q-space>
                    <div class="row q-gutter-x-md">
                        <q-btn type="a" href="https://github.com/DNFT-Team/" target="_blank" flat round dense color="grey" size="sm" icon="bt-github"></q-btn>
                        <q-btn flat round dense color="grey" size="sm" icon="bt-telegram"></q-btn>
                        <q-btn flat round dense color="grey" size="sm" icon="bt-linkedin"></q-btn>
                        <q-btn flat round dense color="grey" size="sm" icon="bt-twitter"></q-btn>
                        <q-btn flat round dense color="grey" size="sm" icon="bt-facebook"></q-btn>
                    </div>
                </q-toolbar>
                <p class="text-center dnft-rights">Copyright © 2021 DNFT</p>
            </q-footer>

        </q-layout>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
</style>