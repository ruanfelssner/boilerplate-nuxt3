<template>
  <footer class="placeFooter rounded-t-3xl">
    <div
      class="placeFooter-container flex md:flex-row px-4 md:px-0 justify-between py-11"
    >
      <div
        class="w-full md:w-5/12 text-white mr-10"
      >
        <a
          href="https://www.fairfax.com.br/"
          target="_blank"
          class="hover:opacity-80"
        >
          <img
            src="@/assets/svgs/logo-white.svg"
            class="mb-2"
            alt="Logo Fairfax"
          />
        </a>
        <p class="mb-4">
          Estamos há mais de 35 anos no mercado de
          seguros, presente em mais de 100 países,
          garantindo soluções diferenciadas e sob
          medida. No Brasil, atuamos de forma
          autônoma buscando sempre inovar e criar
          um relacionamento de longo prazo com
          nossos clientes, fornecedores e
          colaboradores.
          <a
            href="http://www.fairfax.com.br/"
            target="_blank"
            class="hover:underline decoration-solid"
          >
            <strong>Saiba mais.</strong>
          </a>
        </p>
        <div class="placeSocialIcon">
          <OrganismsFooterSocialIcon
            name="facebook"
            link="https://www.facebook.com/people/Fairfaxbrasil/100083615134228/?mibextid=LQQJ4d"
          />
          <OrganismsFooterSocialIcon
            name="youtube"
            link="https://www.youtube.com/@ffseguros"
          />
          <OrganismsFooterSocialIcon
            name="linkedin"
            link="https://br.linkedin.com/company/fairfax-brasil-seguros-corporativos-s-a"
          />
          <OrganismsFooterSocialIcon
            name="twitter"
            link="https://twitter.com/fairfaxbrasil?lang=pt"
          />
          <OrganismsFooterSocialIcon
            name="instagram"
            link="https://www.instagram.com/fairfax.brasil/"
          />
        </div>
      </div>
      <div class="w-full md:w-3/12">
        <h1 class="placeFooter-subtitle">
          Links Úteis
        </h1>
        <ul class="placeFooter-links">
          <li>
            <a
              href="http://novosite.susep.gov.br/"
              target="_blank"
            >
              Susep
            </a>
          </li>
          <li>
            <a
              href="https://www.fenacor.org.br/"
              target="_blank"
            >
              Fenacor
            </a>
          </li>
          <li>
            <a
              href="https://ens.edu.br/"
              target="_blank"
            >
              Funenseg
            </a>
          </li>
          <li>
            <a
              href="https://dpo.privacytools.com.br/policy-view/2ZZDmyRQ2/1/poli%CC%81tica-de-privacidade-da-fairfax-brasil/pt_BR?s=1641839699281"
              target="_blank"
            >
              Política de Privacidade
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-3/12">
        <h1 class="placeFooter-subtitle">
          Contatos
        </h1>
        <div class="placeFooter-info">
          <p>
            SAC:
            <strong>0800 014 3004</strong>
          </p>
          <p>
            Ouvidoria:
            <strong>0800 014 3020</strong>
          </p>
          <p>
            <a
              href="mailto:ouvidoria@fairfax.com.br"
              target="_blank"
              class="hover:underline decoration-solid"
            >
              <strong>
                ouvidoria@fairfax.com.br
              </strong>
            </a>
          </p>
          <p>
            Atendimento para pessoas com
            <br />
            necessidades especiais de fala e
            <br />
            audição:
            <strong>0800 602 5058</strong>
          </p>
        </div>
      </div>
      <div class="w-full md:w-auto">
        <div class="flex flex-row md:flex-col">
          <button
            class="rounded-full p-3 text-center text-white placeFooter-whatsapp mb-4 hover:opacity-80"
          >
            <ff-icon
              name="whatsapp"
              color="white"
              size="40"
            />
          </button>
          <button
            class="rounded-full p-3 text-center text-white placeFooter-chat hover:opacity-80"
          >
            <ff-icon
              name="message-outline"
              color="white"
              size="40"
            />
          </button>
        </div>
      </div>
    </div>
    <hr class="opacity-30" />
    <div class="placeFooter-container">
      <p
        class="copyright text-center text-white py-6"
      >
        Fairfax - © 2024 All Rights Reserved
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  .placeFooter {
    background: #2b364a;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    .placeFooter-whatsapp {
      background: #32d583;
    }
    .placeFooter-chat {
      background: #6dabe2;
    }
    .placeFooter-subtitle {
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .placeFooter-info {
      p {
        color: #d4d9e2;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
      }
    }
    .placeFooter-links {
      li {
        @apply mb-2;
        a {
          color: #d4d9e2;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 24px;
          text-decoration-line: underline;
          &:hover {
            @apply opacity-80;
          }
        }
      }
    }
  }
</style>
