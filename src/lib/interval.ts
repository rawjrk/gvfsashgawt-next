type IntervalId = ReturnType<typeof setInterval>;
type IntervalHandler = () => void;

export class Interval {
  private _id: IntervalId | null = null;
  private _intervalHandler: IntervalHandler = () => {};
  private _intervalMs: number;
  private _active: boolean;

  constructor({
    intervalMs = 1000,
    initActive = true,
  }: {
    intervalMs?: number;
    initActive?: boolean;
  } = {}) {
    this._intervalMs = intervalMs;
    this._active = initActive;

    if (initActive) {
      this.run();
    }
  }

  setHandler(cb: IntervalHandler) {
    this._intervalHandler = cb;

    if (this._active) {
      this._reload();
    }
  }

  setIntervalMs(delayMs: number) {
    this._intervalMs = delayMs;

    if (this._active) {
      this._reload();
    }
  }

  private _reload() {
    this.stop();
    this.run();
  }

  /** Creates interval from the class props to repeatedly execute callback function. */
  run() {
    this._active = true;
    this._id = setInterval(this._intervalHandler, this._intervalMs);
  }

  /** Executes callback function once only. */
  runOnce() {
    if (!this._active) {
      this._intervalHandler();
    }
  }

  /** Clears interval to stop repeated callbacks. */
  stop() {
    this._active = false;
    if (this._id) {
      clearInterval(this._id);
    }
  }
}
