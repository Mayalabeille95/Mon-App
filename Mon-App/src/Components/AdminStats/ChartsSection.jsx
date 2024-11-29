import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const ChartSection = () => {
  // Données pour le diagramme en barres
  const barData = {
    labels: [
      "Jean Dupont",
      "Marie Martin",
      "Lucas Bernard",
      "Sophie Lambert",
      "Emilie Fabre",
    ],
    datasets: [
      {
        label: "Heures d'entraînement par semaine",
        data: [8.5, 9.8, 5.5, 3.5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options pour le graphique en barres
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        type: "category", // Définir correctement le type d'échelle
        title: {
          display: true,
          text: "Membres",
        },
      },
      y: {
        type: "linear", // Définir correctement le type d'échelle
        title: {
          display: true,
          text: "Heures par semaine",
        },
        beginAtZero: true,
      },
    },
  };

  // Données pour le diagramme circulaire
  const pieData = {
    labels: [
      "Musculation",
      "Tapis de course",
      "Haltères",
      "Vélo elliptique",
      "Banc de musculation",
      "Rameur",
    ],
    datasets: [
      {
        data: [30, 28, 18, 12, 9, 3],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Données pour le graphique linéaire
  const lineData = {
    labels: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ],
    datasets: [
      {
        label: "Progression des heures d'entraînement (Moyenne)",
        data: [1.5, 2.8, 3.6, 4.2, 5.0, 5.8, 6.4],
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4, // Courbe lissée
      },
    ],
  };

  // Options pour le graphique linéaire
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Jours de la semaine",
        },
      },
      y: {
        title: {
          display: true,
          text: "Heures d'entraînement (Moyenne)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="chart-section">
      <h2 className="chart-section__title">Graphiques des Statistiques</h2>

      <div className="chart-section__chart">
        <h3>Heures d'entraînement par membre</h3>
        <Bar data={barData} options={barOptions} />
      </div>

      <div className="chart-section__chart">
        <h3>Répartition d'utilisation des machines</h3>
        <Pie data={pieData} />
      </div>

      <div className="chart-section__chart">
        <h3>Progression hebdomadaire moyenne</h3>
        <Line data={lineData} options={lineOptions} />
      </div>
    </section>
  );
};

export default ChartSection;

/*
Composant ChartSection pour GYM Attack présentant des graphiques statistiques :
Diagramme en barres pour les heures d'entraînement par membre
Diagramme circulaire pour la répartition d'utilisation des machines
Graphique linéaire pour la progression hebdomadaire moyenne
Utilise Chart.js et react-chartjs-2 pour créer des visualisations interactives
*/
