// Registers the page-building components with CloudCannon so the Visual
// Editor can live re-render a block as it is edited, and render blocks that
// are added without waiting for a rebuild.
// Loaded only inside CloudCannon's Visual Editor (see BaseLayout.astro).
import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";

import CardAndCopy from "../components/blocks/CardAndCopy.astro";
import CaseStudyLibrary from "../components/blocks/CaseStudyLibrary.astro";
import CenteredCallout from "../components/blocks/CenteredCallout.astro";
import ContactDetails from "../components/blocks/ContactDetails.astro";
import CopyAndCard from "../components/blocks/CopyAndCard.astro";
import CopyAndPrinciples from "../components/blocks/CopyAndPrinciples.astro";
import CopyAndStats from "../components/blocks/CopyAndStats.astro";
import CopyAndTimeline from "../components/blocks/CopyAndTimeline.astro";
import FeaturedTransactions from "../components/blocks/FeaturedTransactions.astro";
import Hero from "../components/blocks/Hero.astro";
import InsightCards from "../components/blocks/InsightCards.astro";
import MetricRibbon from "../components/blocks/MetricRibbon.astro";
import PageHero from "../components/blocks/PageHero.astro";
import ProcessSteps from "../components/blocks/ProcessSteps.astro";
import ProofStrip from "../components/blocks/ProofStrip.astro";
import QuoteAndPrinciples from "../components/blocks/QuoteAndPrinciples.astro";
import RichText from "../components/blocks/RichText.astro";
import SectorCards from "../components/blocks/SectorCards.astro";
import ServiceCards from "../components/blocks/ServiceCards.astro";
import TeamBios from "../components/blocks/TeamBios.astro";
import TeamLevels from "../components/blocks/TeamLevels.astro";
import TransactionExplorer from "../components/blocks/TransactionExplorer.astro";

registerAstroComponent("CardAndCopy", CardAndCopy);
registerAstroComponent("CaseStudyLibrary", CaseStudyLibrary);
registerAstroComponent("CenteredCallout", CenteredCallout);
registerAstroComponent("ContactDetails", ContactDetails);
registerAstroComponent("CopyAndCard", CopyAndCard);
registerAstroComponent("CopyAndPrinciples", CopyAndPrinciples);
registerAstroComponent("CopyAndStats", CopyAndStats);
registerAstroComponent("CopyAndTimeline", CopyAndTimeline);
registerAstroComponent("FeaturedTransactions", FeaturedTransactions);
registerAstroComponent("Hero", Hero);
registerAstroComponent("InsightCards", InsightCards);
registerAstroComponent("MetricRibbon", MetricRibbon);
registerAstroComponent("PageHero", PageHero);
registerAstroComponent("ProcessSteps", ProcessSteps);
registerAstroComponent("ProofStrip", ProofStrip);
registerAstroComponent("QuoteAndPrinciples", QuoteAndPrinciples);
registerAstroComponent("RichText", RichText);
registerAstroComponent("SectorCards", SectorCards);
registerAstroComponent("ServiceCards", ServiceCards);
registerAstroComponent("TeamBios", TeamBios);
registerAstroComponent("TeamLevels", TeamLevels);
registerAstroComponent("TransactionExplorer", TransactionExplorer);
