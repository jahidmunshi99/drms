import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0e62e16050fee02f183ccaebcda1965e";

const UV_LABELS = [
  "Low",
  "Low",
  "Low",
  "Moderate",
  "Moderate",
  "Moderate",
  "High",
  "High",
  "Very High",
  "Very High",
  "Extreme",
  "Extreme",
];

function MetaItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-white/50 text-lg">{icon}</span>
      <span className="text-white text-sm font-semibold">{value}</span>
      <span className="text-white/40 text-[10px] uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

function ForecastCard({ day, icon, hi, lo, rain, active }) {
  return (
    <div
      className={`flex-1 min-w-[72px] rounded-xl px-2 py-3 text-center border transition-colors
      ${
        active
          ? "bg-[#1a2340] border-[#1a2340] text-white"
          : "bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100"
      }`}
    >
      <p
        className={`text-[10px] font-bold uppercase tracking-wide mb-1 ${
          active ? "text-white/60" : "text-gray-400"
        }`}
      >
        {day}
      </p>

      <div className="text-2xl my-1">{icon}</div>

      <p
        className={`text-sm font-bold ${
          active ? "text-white" : "text-[#1a2340]"
        }`}
      >
        {hi}°
      </p>

      <p
        className={`text-xs ${
          active ? "text-white/50" : "text-gray-400"
        }`}
      >
        {lo}°
      </p>

      <p className="text-[10px] text-blue-400 flex items-center justify-center gap-0.5 mt-1">
        <span>💧</span>
        {rain}%
      </p>
    </div>
  );
}

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // CURRENT WEATHER
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              lat: 22.36,
              lon: 90.33,
              units: "metric",
              appid: API_KEY,
            },
          }
        );

        // 5 DAY FORECAST
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              lat: 22.36,
              lon: 90.33,
              units: "metric",
              appid: API_KEY,
            },
          }
        );

        const current = weatherResponse.data;
        const forecastList = forecastResponse.data.list;

        const formatTime = (timestamp) => {
          return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          });
        };

        const dailyForecast = forecastList
          .filter((item, index) => index % 8 === 0)
          .slice(0, 7)
          .map((item, index) => ({
            day:
              index === 0
                ? "Today"
                : new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                  }),
            icon: "🌤",
            hi: Math.round(item.main.temp_max),
            lo: Math.round(item.main.temp_min),
            rain: item.pop ? Math.round(item.pop * 100) : 0,
          }));

        const formattedData = {
          city: current.name,
          station: "OpenWeather Station",
          temp: Math.round(current.main.temp),
          feelsLike: Math.round(current.main.feels_like),
          humidity: current.main.humidity,
          windSpeed: Math.round(current.wind.speed * 3.6),
          windDir: current.wind.deg || "N/A",
          windGust: current.wind.gust
            ? Math.round(current.wind.gust * 3.6)
            : 0,
          pressure: current.main.pressure,
          visibility: current.visibility
            ? (current.visibility / 1000).toFixed(1)
            : 0,
          uvIndex: 6,
          condition: current.weather[0].main,
          conditionIcon: "⛅",
          rainfall24h:
            current.rain?.["1h"] || current.rain?.["3h"] || 0,
          sunrise: formatTime(current.sys.sunrise),
          sunset: formatTime(current.sys.sunset),
          updatedAt: new Date().toLocaleString(),
          alert:
            "Heat Advisory: Stay hydrated and avoid heavy work during noon.",
          forecast: dailyForecast,
        };

        setWeatherData(formattedData);
      } catch (error) {
        console.error("Weather fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Weather...
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load weather data.
      </div>
    );
  }

  const d = weatherData;

  const uvPct = Math.min((d.uvIndex / 11) * 100, 100);

  return (
    <div className="p-5 min-h-screen font-sans bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#1a2340] text-lg font-semibold flex items-center gap-2">
          <span className="text-red-600 text-xl">🌤</span>
          Weather Dashboard
        </h2>

        <span className="bg-[#1a2340] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="text-red-400">📍</span>
          {d.city}, Bangladesh
        </span>
      </div>

      {/* Alert */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 border-l-4 border-l-amber-500 rounded-xl px-4 py-3 mb-4 text-amber-800 text-xs">
        <span className="text-amber-500 text-base mt-0.5 shrink-0">
          ⚠️
        </span>

        <p>
          <strong>Heat Advisory:</strong>{" "}
          {d.alert.replace("Heat Advisory: ", "")}
        </p>
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Main Weather */}
        <div className="relative bg-gradient-to-br from-[#1a2340] to-[#2c3e6b] rounded-2xl p-6 text-white overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-red-600/10" />

          <div className="absolute -bottom-6 -left-4 w-24 h-24 rounded-full bg-white/5" />

          <p className="text-white/60 text-xs flex items-center gap-1 mb-1">
            <span>📍</span>
            {d.city} · {d.station}
          </p>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-start gap-1 mt-2">
                <span className="text-6xl font-bold leading-none">
                  {d.temp}
                </span>

                <span className="text-2xl text-white/60 mt-2">°C</span>
              </div>

              <p className="text-white/80 text-base mt-1">
                {d.condition}
              </p>

              <p className="text-white/50 text-xs mt-1">
                Feels like {d.feelsLike}°C · Humidity {d.humidity}%
              </p>
            </div>

            <span className="text-6xl opacity-90 mt-1">
              {d.conditionIcon}
            </span>
          </div>

          <div className="flex items-center gap-5 mt-5 pt-4 border-t border-white/10 flex-wrap">
            <MetaItem
              icon="💧"
              value={`${d.humidity}%`}
              label="Humidity"
            />

            <div className="w-px h-8 bg-white/15" />

            <MetaItem
              icon="💨"
              value={`${d.windSpeed} km/h`}
              label="Wind"
            />

            <div className="w-px h-8 bg-white/15" />

            <MetaItem
              icon="🌡"
              value={`${d.pressure} hPa`}
              label="Pressure"
            />

            <div className="w-px h-8 bg-white/15" />

            <MetaItem
              icon="👁"
              value={`${d.visibility} km`}
              label="Visibility"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* UV */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 flex items-center gap-1.5 mb-3">
              ☀️ UV Index
            </p>

            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-bold text-[#1a2340]">
                {d.uvIndex}
              </span>

              <div>
                <p className="text-sm font-semibold text-orange-500">
                  {UV_LABELS[d.uvIndex]}
                </p>

                <p className="text-xs text-gray-400">
                  Use SPF 30+, seek shade
                </p>
              </div>
            </div>

            <div className="relative h-1.5 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-500 to-red-600">
              <div
                className="absolute w-3 h-3 rounded-full bg-[#1a2340] border-2 border-white shadow -top-[3px]"
                style={{ left: `calc(${uvPct}% - 6px)` }}
              />
            </div>
          </div>

          {/* Wind */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-3">
              💨 Wind Details
            </p>

            <div>
              <p className="text-2xl font-bold text-[#1a2340]">
                {d.windSpeed} km/h
              </p>

              <p className="text-xs text-gray-500">
                Direction: {d.windDir}
              </p>

              <p className="text-xs text-orange-500 mt-1">
                Gusts up to {d.windGust} km/h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Forecast */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
        <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-3">
          📅 7-Day Forecast
        </p>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {d.forecast.map((f, i) => (
            <ForecastCard key={i} {...f} active={i === 0} />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Sunrise Sunset */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-3">
            🌅 Sunrise / Sunset
          </p>

          <div className="flex justify-around">
            <div>
              <div className="text-2xl mb-1">🌅</div>

              <p className="text-base font-bold text-[#1a2340]">
                {d.sunrise}
              </p>
            </div>

            <div>
              <div className="text-2xl mb-1">🌇</div>

              <p className="text-base font-bold text-[#1a2340]">
                {d.sunset}
              </p>
            </div>
          </div>
        </div>

        {/* Rain */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">
            🌧 Precipitation
          </p>

          <div className="text-3xl mb-1">🌧</div>

          <p className="text-2xl font-bold text-[#1a2340]">
            {d.rainfall24h}
          </p>

          <p className="text-xs text-gray-400">mm last 24h</p>
        </div>

        {/* Advisory */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">
            🌾 Agro Advisory
          </p>

          <p className="text-sm font-semibold text-green-700 mb-1">
            ✅ Suitable for irrigation
          </p>

          <p className="text-xs text-gray-500 leading-relaxed">
            Mild winds and moderate humidity. Good conditions for crop
            growth today.
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-right text-xs text-gray-300 mt-4">
        Last updated: {d.updatedAt}
      </p>
    </div>
  );
}