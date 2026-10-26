import { useState } from "react";
import type { FormEvent } from "react";
import { phoneDisplay } from "../../data/site";
import { ArrowRightIcon } from "../Icons";

export function Listings() {
  const [searchNote, setSearchNote] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchNote(
      `For live MLS results and private showings, call Marci at ${phoneDisplay} or send a message below.`,
    );
  };

  return (
    <section
      className="section search"
      id="listings"
      aria-labelledby="listings-title"
    >
      <div className="container">
        <div className="search__head">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Find your dream home</p>
            <h2 className="section-title" id="listings-title">
              Search <em>listings.</em>
            </h2>
          </div>
          <p
            className="section-lede"
            data-reveal
            style={{ transitionDelay: "80ms" }}
          >
            Tell us what you're looking for. We'll help you find the right fit
            in Pahrump and beyond.
          </p>
        </div>

        <div className="search__panel" data-reveal>
          <form className="search__form" onSubmit={handleSearch}>
            <div className="field field--wide">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City, neighborhood, or ZIP"
                autoComplete="address-level2"
              />
            </div>

            <div className="field">
              <label htmlFor="type">Property type</label>
              <select id="type" name="type" defaultValue="">
                <option value="">Any type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
                <option>Luxury</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="sort">Sort by</label>
              <select id="sort" name="sort" defaultValue="newest">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-asc">Least expensive to most</option>
                <option value="price-desc">Most expensive to least</option>
                <option value="beds-asc">Bedrooms (low to high)</option>
                <option value="beds-desc">Bedrooms (high to low)</option>
                <option value="baths-asc">Bathrooms (low to high)</option>
                <option value="baths-desc">Bathrooms (high to low)</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="beds">Bedrooms</label>
              <select id="beds" name="beds" defaultValue="">
                <option value="">Any number</option>
                <option>Studio</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
                <option>6+</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="baths">Baths</label>
              <select id="baths" name="baths" defaultValue="">
                <option value="">Any number</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
                <option>6+</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="min-price">Min price</label>
              <input
                id="min-price"
                name="minPrice"
                type="number"
                inputMode="decimal"
                placeholder="No minimum"
                autoComplete="off"
              />
            </div>

            <div className="field">
              <label htmlFor="max-price">Max price</label>
              <input
                id="max-price"
                name="maxPrice"
                type="number"
                inputMode="decimal"
                placeholder="No maximum"
                autoComplete="off"
              />
            </div>

            <div className="search__actions">
              {!searchNote ? (
                <p>
                  Live MLS search by request. Call or message Marci for current
                  availability.
                </p>
              ) : (
                <p className="search__note" role="status">
                  {searchNote}
                </p>
              )}
              <button className="btn btn--solid" type="submit">
                Search now
                <ArrowRightIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
